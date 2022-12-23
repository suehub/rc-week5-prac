import { rest } from "msw";

const todoDummy = [
    {
        id: 1, 
        title: "React 5주차 강의 듣기"
    },
    {
        id: 2, 
        title: "받아쓰기 숙제 하기"
    }
];

export const handlers = [
    // 게시글 생성하기
    rest.post('/todos', async (req, res, ctx) => { // post : 생성, 등록할 때 사용하는 HTTP method
        // req가 전달이 됐을 때 가져와야하기 때문에 await 작성해줌
        const data = await req.json();     // 데이터 전송하면 req라는 0번째 인덱스로 들어옴. 
        console.log(data);
        todoDummy.push(data);

        return res(
            ctx.status(200),    // 데이터가 잘 전달 됐다는 status
        )
    }), 

    // 게시글 조회하기
    rest.get('/todos', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(todoDummy)); // 수정된 dummy 넘겨주기
    })
]