import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { ArisDataController } from "../arisData.controller";
import { ArisDataService } from "../arisData.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  attributeName: "exampleAttributeName",
  attributeValue: "exampleAttributeValue",
  createdAt: new Date(),
  id: "exampleId",
  lastSynced: new Date(),
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  attributeName: "exampleAttributeName",
  attributeValue: "exampleAttributeValue",
  createdAt: new Date(),
  id: "exampleId",
  lastSynced: new Date(),
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    attributeName: "exampleAttributeName",
    attributeValue: "exampleAttributeValue",
    createdAt: new Date(),
    id: "exampleId",
    lastSynced: new Date(),
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  attributeName: "exampleAttributeName",
  attributeValue: "exampleAttributeValue",
  createdAt: new Date(),
  id: "exampleId",
  lastSynced: new Date(),
  updatedAt: new Date(),
};

const service = {
  createArisData() {
    return CREATE_RESULT;
  },
  arisDataItems: () => FIND_MANY_RESULT,
  arisData: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("ArisData", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ArisDataService,
          useValue: service,
        },
      ],
      controllers: [ArisDataController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /arisData", async () => {
    await request(app.getHttpServer())
      .post("/arisData")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        lastSynced: CREATE_RESULT.lastSynced.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /arisData", async () => {
    await request(app.getHttpServer())
      .get("/arisData")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          lastSynced: FIND_MANY_RESULT[0].lastSynced.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /arisData/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/arisData"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /arisData/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/arisData"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        lastSynced: FIND_ONE_RESULT.lastSynced.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /arisData existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/arisData")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        lastSynced: CREATE_RESULT.lastSynced.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/arisData")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
