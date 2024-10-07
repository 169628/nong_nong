# 資料結構

- _assets_
  - _images_
    - _icon_
    - _logo_
  - _scss_
    - _base_ -> 除了 bootstrap 之外的全域設定、斷點設定
    - _layout_ -> 放 header 跟 footer 的 scss
    - _pages_ -> 放其他頁面的 scss
    - _utils_ -> 所有 bootstrap 相關
    - all.scss -> 以上所有 scss 的匯總
- _layout_ -> 放 header 跟 footer 的頁面
- _pages_ -> 放其他頁面
- main.js
- vite.config.js

# \_variables.scss 變數的新增與修改

- 新增顏色: 搜尋 "nong-nong-color" 可以找到。(舊的顏色沒刪)
- 刪除原有的 spacer 改為如下

1. 4 px
2. 8 px
3. 10 px
4. 12 px
5. 14 px
6. 16 px
7. 18 px
8. 20 px
9. 22 px
10. 24 px
11. 28 px
12. 30 px
13. 32 px
14. 36 px
15. 40 px
16. 44 px
17. 48 px
18. 50 px
19. 52 px
20. 56 px
21. 60 px
22. 64 px
23. 68 px
24. 72 px
25. 76 px
26. 80 px
27. 84 px
28. 86 px
29. 88 px
30. 98 px
31. 120 px
32. 140 px
33. 160 px
34. 162 px
35. 180 px
36. 240 px

- 修改背景色、修改整體文字顏色為 $black
- 刪除 h 與 p 標籤下方的 margin 空間
- 刪除 a 標籤下方的線條、調整 a 標籤為繼承父層的顏色
- 提醒 rounded

1. 4px
2. 6px
3. 8px
4. 16px
5. 32px

- 如果要自己寫 RWD 已經設定好，斷點同 bootstrap lg、md ，在相對應的 scss 中寫法如下

```
h1 {
  @include pad {
    color: green;
  }
  @include mobile {
    color: pink;
  }
}
```
