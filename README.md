# 🫙 Daily Quest Jar

*English below · النسخة العربية أدناه ⬇️*

A cozy, mobile-first web app that turns your to-do list into a digital jar of quests. Every day, pull one card, do the thing, and check it off — like reaching into a jar of little handwritten challenges sitting on your desk.

**Pick a card. Do the thing. Make today count.**

## How it works

- Press **Draw Today's Card** and watch the jar shake and a card flip out with your quest for the day.
- Each card shows a task, its category (Creative, Home, Tech, Learning, Adventure, Career, Lifestyle), and an estimated duration (15 min – 3 hours).
- You get **one quest a day** — redraws are limited (2 per day) so you can't endlessly skip.
- Mark it **✓ I did it** to complete the quest, trigger a small celebration, and log it to **My Quests**.
- Come back tomorrow for a new card — the app tracks the local date and resets automatically.

All 50+ tasks are small, concrete, and completable in a single sitting (things like *"Organize one drawer completely"* or *"Cook a recipe you've never tried before"*) — no vague goals like "learn a language."

## Tech

Plain HTML, CSS, and JavaScript. No frameworks, no build step, no backend.

- Progress and quest history are saved with `localStorage`, so everything persists across refreshes with no account needed.
- Fonts: [Fraunces](https://fonts.google.com/specimen/Fraunces) (titles) + [Nunito](https://fonts.google.com/specimen/Nunito) (everything else) via Google Fonts.

## Running locally

Just open `index.html` in a browser — no install, no server required.

To test on another device on the same network, serve the folder instead:

```bash
python -m http.server 8734
# then visit http://localhost:8734
```

## Deploying

This is a static site, so it deploys to [Vercel](https://vercel.com) with zero configuration — no build command, no `vercel.json` needed. Import the repo at [vercel.com/new](https://vercel.com/new) and deploy.

---
---

# 🫙 جرة المهام اليومية

*بالعربية · English above ⬆️*

تطبيق ويب دافئ ومصمم أولاً للجوال، يحوّل قائمة مهامك إلى جرة رقمية مليئة بالمهام. كل يوم، اسحب بطاقة واحدة، نفّذ المهمة، وأنجزها — تمامًا مثل مدّ يدك إلى جرة صغيرة مليئة بتحديات مكتوبة بخط اليد فوق مكتبك.

**اختر بطاقة. نفّذ المهمة. اجعل يومك يستحق.**

## كيف يعمل

- اضغط **اسحب بطاقة اليوم** وشاهد الجرة تهتز، وبطاقة تنقلب لتكشف عن مهمتك لهذا اليوم.
- تعرض كل بطاقة المهمة، وفئتها (إبداعي، منزل، تقنية، تعلّم، مغامرة، مسيرة مهنية، نمط حياة)، والمدة التقريبية (من 15 دقيقة إلى 3 ساعات).
- تحصل على **مهمة واحدة فقط في اليوم** — عدد مرات إعادة السحب محدود (مرتان يوميًا) حتى لا تتخطى المهام إلى ما لا نهاية.
- اضغط **✓ أنجزتها** لإكمال المهمة، فتظهر احتفالية صغيرة، وتُسجَّل المهمة في **مهامّي**.
- عُد غدًا لبطاقة جديدة — يراقب التطبيق التاريخ المحلي ويُعيد الضبط تلقائيًا.

جميع المهام الخمسين وأكثر صغيرة، محددة، ويمكن إنجازها في جلسة واحدة (مثل *"رتّب درجًا واحدًا بالكامل"* أو *"اطبخ وصفة لم تجرّبها من قبل"*) — بلا أهداف غامضة مثل "تعلّم لغة جديدة".

## التقنية

HTML وCSS وJavaScript بسيطة. بلا أطر عمل، بلا خطوة بناء (build)، وبلا خادم خلفي (backend).

- يُحفظ التقدم وسجلّ المهام باستخدام `localStorage`، لذا يبقى كل شيء محفوظًا بعد تحديث الصفحة دون الحاجة إلى حساب.
- الخطوط: [Fraunces](https://fonts.google.com/specimen/Fraunces) (للعناوين) و [Nunito](https://fonts.google.com/specimen/Nunito) (لباقي النصوص) عبر Google Fonts.

## التشغيل محليًا

فقط افتح `index.html` في المتصفح — لا حاجة لتثبيت أي شيء أو تشغيل خادم.

لتجربته من جهاز آخر على نفس الشبكة، شغّل خادمًا محليًا بدلاً من ذلك:

```bash
python -m http.server 8734
# ثم افتح http://localhost:8734
```

## النشر

هذا موقع ثابت (static site)، لذا يمكن نشره على [Vercel](https://vercel.com) دون أي إعداد إضافي — لا حاجة لأمر بناء (build command) ولا لملف `vercel.json`. استورد المستودع من [vercel.com/new](https://vercel.com/new) واضغط Deploy.
