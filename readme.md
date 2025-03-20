# 폰트

[출처](https://www.44bits.io/ko/post/optimization_webfont_with_pyftsubnet)

```python
pip install fonttools
pip install zopfli
pip install brotli
$ pyftsubset ... --flavor='woff'
pyftsubset ... --flavor='woff' --with-zopfli
```

## 한글 폰트 서브셋

### 폰트서브셋.txt

[링크](https://raw.githubusercontent.com/nacyot/korean_subset_glyphs/master/ksx1001_korean_2350.txt)

### KS X 1001의 특수문자 포함

[링크](https://raw.githubusercontent.com/nacyot/korean_subset_glyphs/master/glyphs.txt)

```bat woff
pyftsubset "NotoSansCJKkr-Regular.otf" \
  --flavor="woff" \
  --with-zopfli \
  --output-file="./subset-fonts/NotoSansR.subset.5.woff \
  --text-file="fontsubset.txt" \
  --layout-features='*' \
  --glyph-names \
  --symbol-cmap \
  --legacy-cmap \
  --notdef-glyph \
  --notdef-outline \
  --recommended-glyphs \
  --name-legacy \
  --drop-tables= \
  --name-IDs='*' \
  --name-languages='*'
```

## font-face

```css
@font-face {
  font-family: 'Awesome Font';
  font-weight: 400;
  src: local('Awesome Font'),
  url('https://example.com/awesome-font.woff2') format('woff2'),
  url('https://example.com/awesome-font.woff2') format('woff'),
  url('https://example.com/awesome-font.otf') format('opentype')
}
```
