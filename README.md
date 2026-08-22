# Amir Yazdani — Resume Site

سایت رزومه شخصی، ساخته‌شده با React + Vite.

## اجرای محلی (تست قبل از دیپلوی)

```bash
npm install
npm run dev
```

بعد از اجرا، آدرسی مثل `http://localhost:5173` رو توی مرورگر باز کن.

## دیپلوی رایگان

### گزینه ۱: Vercel (پیشنهاد می‌شه — ساده‌ترین راه)

1. یه اکانت رایگان توی [vercel.com](https://vercel.com) بساز (می‌تونی با گیت‌هاب لاگین کنی)
2. کد این پروژه رو توی یه ریپوی گیت‌هاب پوش کن
3. توی Vercel روی "Add New Project" بزن و ریپو رو انتخاب کن
4. Vercel خودش تشخیص می‌ده که پروژه Vite هست و تنظیمات build رو خودکار پر می‌کنه (`npm run build`, خروجی توی `dist`)
5. دکمه Deploy رو بزن — چند ثانیه بعد یه آدرس مثل `amiryazdani-resume.vercel.app` بهت می‌ده

### گزینه ۲: Netlify

1. اکانت رایگان توی [netlify.com](https://netlify.com) بساز
2. یا مستقیم پوشه `dist` (بعد از `npm run build`) رو با drag & drop آپلود کن، یا ریپوی گیت‌هاب رو وصل کن
3. آدرس build: `npm run build` — پوشه خروجی: `dist`

### گزینه ۳: GitHub Pages

1. `npm run build` رو بزن تا پوشه `dist` ساخته بشه
2. محتوای `dist` رو توی یه برنچ به اسم `gh-pages` پوش کن (یا از پکیج `gh-pages` npm استفاده کن)
3. توی تنظیمات ریپو، بخش Pages رو روی برنچ `gh-pages` فعال کن

## تغییر محتوا

همه محتوای متنی (اسم، تجربه‌کاری، مهارت‌ها، پروژه‌ها، اطلاعات تماس) توی فایل `src/App.jsx` بالای فایل، داخل آبجکت‌های `contactValues` و `t` (برای هر زبان: `fa`, `en`, `de`) قرار داره.
