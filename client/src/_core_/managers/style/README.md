## 그리드 시스템

```css
/* 폰에 대한 스타일 - 4 grid */
@media (max-width: 480px) {
  .guide {
    left: calc((100% - 15rem) / 2);
    right: calc((100% - 15rem) / 2);
    width: 15rem;
  }
}

/* 태블릿에 대한 스타일 - 8 grid */
@media (min-width: 481px) and (max-width: 1024px) {
  .guide {
    left: calc((100% - 23rem) / 2);
    right: calc((100% - 23rem) / 2);
    width: 23rem;
  }
}

/* PC에 대한 스타일 - 16 grid */
@media (min-width: 1025px) {
  .guide {
    left: calc((100% - 63rem) / 2);
    right: calc((100% - 63rem) / 2);
    width: 63rem;
  }
}
```
