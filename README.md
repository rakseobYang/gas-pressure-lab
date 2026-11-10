# PRESSURE QUEST · 주사기 속 우주

**[수업 웹사이트 바로 열기 →](https://rakseobyang.github.io/gas-pressure-lab/)**

[![GitHub Pages 배포](https://github.com/rakseobYang/gas-pressure-lab/actions/workflows/pages.yml/badge.svg)](https://github.com/rakseobYang/gas-pressure-lab/actions/workflows/pages.yml)

중학교 과학 [9과06-02]에 맞춘 45분 탐구 수업. 4인 모둠이 **Vernier Go Direct 기체 압력 센서**와 20 mL 주사기를 직접 조작하고, Graphical Analysis에서 읽은 압력을 웹 활동지에 입력합니다.

## 배포된 사이트와 자료

GitHub Pages로 공개 배포되어 있습니다. 설치나 로그인 없이 아래 링크에서 수업을 시작할 수 있습니다.

| 자료 | 바로가기 | 내용 |
|---|---|---|
| 수업 웹사이트 | [PRESSURE QUEST 열기](https://rakseobyang.github.io/gas-pressure-lab/) | 실험 안내, 측정표·그래프, 입자 모형, 탐구 기록 |
| 빈 학생 활동지 | [PDF 다운로드](https://rakseobyang.github.io/gas-pressure-lab/downloads/pressure-quest-blank.pdf) | A4 4쪽, 인쇄하여 작성 |
| 교사용 지도자료 | [PDF 다운로드](https://rakseobyang.github.io/gas-pressure-lab/downloads/pressure-quest-teacher.pdf) | A4 3쪽, 준비·운영·평가·출처 |
| 작성한 활동지 | [웹사이트의 정리 단계](https://rakseobyang.github.io/gas-pressure-lab/#finish) | 입력한 측정값·그래프·답안을 **작성한 활동지 PDF** 버튼으로 저장 |
| 배포 상태 | [GitHub Actions 확인](https://github.com/rakseobYang/gas-pressure-lab/actions/workflows/pages.yml) | 최신 배포 실행 결과와 로그 |

학생에게 공유할 주소: **https://rakseobyang.github.io/gas-pressure-lab/**

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

## 배포 방법과 수정 반영

현재 저장소는 **GitHub Pages + GitHub Actions**로 배포합니다. 런타임 외부 CDN·백엔드·API 키가 필요 없습니다.

1. 저장소의 **Settings → Pages → Build and deployment**에서 Source를 **GitHub Actions**로 설정합니다. 이 저장소에는 이미 설정되어 있습니다.
2. 수업 웹 파일을 수정하고 `main` 브랜치에 커밋하면 [Deploy Pages 워크플로](.github/workflows/pages.yml)가 자동 실행됩니다.
3. 워크플로가 HTML·CSS·JavaScript와 `assets/`, `downloads/`, `vendor/`를 묶어 배포합니다.
4. [Actions](https://github.com/rakseobYang/gas-pressure-lab/actions/workflows/pages.yml)에서 실행 결과가 성공인지 확인한 뒤 [공개 사이트](https://rakseobyang.github.io/gas-pressure-lab/)에서 변경 내용을 확인합니다.

수동 재배포는 **Actions → Deploy Pages → Run workflow**에서 실행할 수 있습니다. PDF 생성 코드를 수정했다면 `npm run build:pdf`를 실행하고 생성된 `downloads/`의 PDF도 함께 커밋하세요.

배포 파일의 실제 다운로드와 로컬 검증본의 일치는 확인했습니다. 기능 테스트·PDF 검증과 실제 브라우저 시각 검증의 범위는 [검증 기록](VALIDATION.md)에 구분해 두었습니다.

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
