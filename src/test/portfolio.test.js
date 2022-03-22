import request from "supertest";
import app from "../app.js";

describe("GET /portfolios", ()=>{
    test("Se o status é 200", ()=>{
        return request(app).get("/portfolio")
        .then((response)=>{
            console.log(response);
            expect(response.statusCode).toBe(200);
        });
    });
});

describe("POST /portfolios", ()=>{
    test("Se o body existe", ()=>{
        return request(app).post("/portfolio")
        .send({
            "foto": "foto.jpg",
            "descricao": "descricao",
            "duracao": 30,
            "clienteId": 1,
            "funcionarioId": 3
        })
        .then((response)=>{
            console.log(response.body);
            expect(response.body.mensagem).toBeTruthy();
        });
    });
});