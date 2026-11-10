# PRESSURE QUEST · 주사기 속 우주

중학교 과학 [9과06-02]에 맞춘 45분 탐구 수업. 4인 모둠이 **Vernier Go Direct 기체 압력 센서**와 20 mL 주사기를 직접 조작하고, Graphical Analysis에서 읽은 압력을 웹 활동지에 입력합니다.

## 수업 구성

예상 5분 + 준비 7분 + 측정 15분 + 해석 10분 + 정리 8분 = 45분.

- 센서 연결·안전 안내, 변인 통제, 역할 교대
- 측정표와 부피–압력 산점도, 실제 값과 분리된 가상 예시
- 입자 수·크기·평균 속력을 유지하는 설명용 모형
- 주장·증거·이유, 출구 질문, 자기점검
- 브라우저 자동 저장·초기화, 한국어 글꼴 포함 PDF

센서는 웹에서 직접 연결하지 않습니다. 앱에서 측정한 값을 학생이 입력합니다. 기록은 localStorage에만 저장되며 서버로 전송되거나 자동 제출되지 않습니다. 공용 기기에서는 PDF 저장 후 초기화합니다.

## 실행·검증

정적 사이트입니다. 이 폴더를 HTTP 서버로 제공하면 됩니다. `index.html`을 파일로 직접 열면 브라우저 보안 정책 때문에 글꼴 fetch와 작성 PDF 생성이 제한될 수 있습니다.

```sh
npm ci
npm test
npm run build:pdf
```

`downloads/pressure-quest-blank.pdf`는 4쪽 빈 학생 활동지, `downloads/pressure-quest-teacher.pdf`는 3쪽 교사용 지도자료입니다. 작성한 활동지는 웹의 버튼에서 현재 기록을 반영해 생성됩니다. 긴 답변은 자동으로 다음 페이지로 이어집니다.

GitHub Pages 설정에서 Source를 **GitHub Actions**로 선택하면 `.github/workflows/pages.yml`이 `main` 변경을 배포합니다. 런타임 외부 CDN·백엔드·API 키가 필요 없습니다.

## 실험 주의

연결 전 10 mL로 설정하고 10–20 mL에서 천천히 늘려 측정합니다. 온도와 기체량을 유지하며 절대압력(kPa)을 읽습니다. 대기압을 0으로 만들지 않습니다. 센서에 물을 넣지 않습니다. 교사는 실제 장비의 연결·누출·안정성을 수업 전에 확인해야 합니다.

GDX-GP 내부 공간 0.8 mL 및 연결 튜브 때문에 전체 기체 부피는 주사기 눈금과 다릅니다. 눈금만으로 계산한 PV가 완벽히 같아야 한다고 평가하지 않습니다. 코드와 PDF 검증은 실제 실험의 성공을 보장하지 않습니다.

## 근거·라이선스

- 교육과정 MCP: https://github.com/raphysicst-create/korean-secondary-learning-map-mcp — get_standard [9과06-02] 원문 확인
- Vernier 설명서: https://www.vernier.com/manuals/gdx-gp/
- 실험 개요: https://www.vernier.com/experiment/psv-30_gas-pressure-and-volume/
- 독립 제작 수업안이며 버니어 유료 교재 내용을 복제하지 않았습니다.
- Nanum Gothic: SIL Open Font License, `assets/OFL.txt`
- jsPDF: MIT, `vendor/LICENSE.jspdf`

근거 확인일: 2026-11-10. 상세 검증 범위는 `VALIDATION.md`에 기록합니다.
