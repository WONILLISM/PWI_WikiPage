# 프론트엔드 과제 테스트

wiki 데이터를 json-server를 이용해서 api를 연동했습니다.
db.json 파일을 첨부합니다.

## 사용법

root 디렉토리에서 아래 명령어를 입력해주세요.

```
yarn run initialize
yarn server
# 다른 터미널에서
yarn client
```

- [x] 위키페이지는 제목과 본문으로 구성되며 각각 텍스트입니다.
- [x] 메인페이지에서는 여러개의 위키페이지제목이 목록으로 나옵니다.
- [x] 메인페이지에 목록으로 보여지는 제목의 갯수는 5개이며, 5개가 넘어가면 페이지를 구분해서 표시합니다.
- [x] 위키페이지 제목을 클릭하면 제목과 본문을 볼 수 있습니다.
- [x] 위키페이지 본문에 다른 위키페이지의 제목이 있으면 자동으로 링크가 걸리고,클릭하면 해당 위키페이지로 이동합니다.
- [x] 메인페이지에서 추가 버튼을 누르면 새로이 입력할 수 있는 창이 나오고, 제목과 내용을 입력할 수 있습니다.
- [x] 위키내용페이지에는 수정 버튼이 있고, 수정을 누르면 내용을 수정해서 저장할 수 있습니다.
- [x] 위키페이지 아래에는 위키페이지 제목을 포함하는 내용이 담긴 위키페이지의 제목들을 나열합니다.
