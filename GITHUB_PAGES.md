# GitHub Pages 배포 방법

이 폴더는 GitHub Pages용으로 준비되어 있습니다.

## 배포 구조

- `docs/index.html`
- `docs/styles.css`
- `docs/app.js`

GitHub Pages에서 `main` 브랜치의 `/docs` 폴더를 배포 대상으로 선택하면 됩니다.

## 가장 쉬운 배포 순서

1. GitHub에서 새 저장소를 만듭니다.
2. 현재 폴더 내용을 새 저장소에 업로드합니다.
3. GitHub 저장소에서 `Settings` -> `Pages` 로 들어갑니다.
4. `Build and deployment` 에서 `Deploy from a branch` 를 선택합니다.
5. Branch는 `main`, Folder는 `/docs` 를 선택합니다.
6. 저장 후 1~5분 정도 기다리면 공개 링크가 생성됩니다.

## 생성되는 링크 예시

`https://사용자이름.github.io/저장소이름/`

## 참고

- `prototype/` 폴더는 작업용 원본입니다.
- `docs/` 폴더는 GitHub Pages 배포용 복사본입니다.
