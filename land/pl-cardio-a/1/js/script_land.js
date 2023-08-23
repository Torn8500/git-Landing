var Attention=function(){"use strict";function e(e){for(var s in e){s=s.toUpperCase();var i=a[s];if(i)return t(i,o)}return t(a.EN,o)}function t(e,t){function a(e){if(e.matches)r.prepend(i()),r.prepend(s()),r.append(s());else for(var t=document.querySelectorAll(".blockRedLine3103 .blockRedLine3103__image"),a=0;a<t.length;a++)t[a].remove()}var o=document.createElement("div"),r=document.createElement("div"),n=document.createElement("div"),u=document.createElement("div"),c=document.createElement("div");o.classList.add("blockRedLine3103"),u.textContent=e.title,c.textContent=e.text,o.style.cssText="color: "+t.color+"; background: "+t.background+"; box-sizing:border-box;font: 400 16px / 1.15 Arial,sans-serif;text-transform:none;position:relative;z-index:1000000; padding:0;margin:0;direction:ltr;text-transform:none;",r.style.cssText="font:inherit;margin: 0 auto; padding: 10px 10px; max-width: 1200px; width: 100%; display: flex; justify-content: center; align-items: center; box-sizing: border-box;",n.style.cssText="font:inherit;text-align:center;box-sizing:border-box;padding:0 5px;margin:0;",u.style.cssText="font:inherit;font-weight:700;color:inherit;padding:0;margin:0 0 5px;box-sizing:border-box;",c.style.cssText="font:inherit;font-size:15px;color:inherit;padding:0;margin:0;box-sizing:border-box;",n.append(u),n.append(c),r.append(n),o.append(r),document.body.prepend(o);var l=window.matchMedia("(min-width: 768px)");a(l),l.addListener(a)}function s(){var e=document.createElement("div");e.classList.add("blockRedLine3103__image");for(var t=["0px","20px","10px"],s=["10px","10px","0px"],i=0;i<3;i++){var a=document.createElement("div");a.style.cssText="width: 65px; height: 5px; border-radius: 2px; background: rgba(255, 255, 255, 0.3); margin-top: 0; margin-right: 0; margin-bottom: "+s[i]+"; margin-left: "+t[i]+"; box-sizing: border-box;",e.append(a)}return e.style.cssText="flex-shrink: 0; box-sizing: border-box; padding: 0; margin: 0;",e}function i(){var e=document.createElement("img");return e.classList.add("blockRedLine3103__image"),e.style.cssText="flex-shrink: 0; box-sizing: border-box; width: 60px; height: auto; margin: 0; padding: 0;",e.src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA0NS40IDM3LjgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1LjQgMzcuODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiNGRkZGRkY7fQoJLnN0MXtmaWxsOiMwMEE2NTE7fQo8L3N0eWxlPgo8Zz4KCTxnPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNS45LDI5LjNjLTIuNCwwLTQuMywxLjktNC4zLDQuM3MxLjksNC4zLDQuMyw0LjNjMi40LDAsNC4zLTEuOSw0LjMtNC4zUzE4LjMsMjkuMywxNS45LDI5LjN6IE0xNS45LDM1LjIKCQkJYy0wLjksMC0xLjctMC43LTEuNy0xLjdzMC43LTEuNywxLjctMS43YzAuOSwwLDEuNywwLjcsMS43LDEuN1MxNi44LDM1LjIsMTUuOSwzNS4yeiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zNS40LDI5LjNjLTIuNCwwLTQuMywxLjktNC4zLDQuM3MxLjksNC4zLDQuMyw0LjNjMi40LDAsNC4zLTEuOSw0LjMtNC4zUzM3LjgsMjkuMywzNS40LDI5LjN6IE0zNS40LDM1LjIKCQkJYy0wLjksMC0xLjctMC43LTEuNy0xLjdzMC43LTEuNywxLjctMS43YzAuOSwwLDEuNywwLjcsMS43LDEuN1MzNi40LDM1LjIsMzUuNCwzNS4yeiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zLjQsMzIuNGg3LjNjMC4yLTEsMC43LTEuOCwxLjMtMi41SDMuNFYzMi40eiIvPgoJCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00My44LDI5Ljl2LTguN2wtNi05LjdoLTkuN3YxOC4zaC04LjNjMC43LDAuNywxLjEsMS41LDEuMywyLjVoOS4yYzAuNS0yLjQsMi42LTQuMiw1LjItNC4yczQuNywxLjgsNS4yLDQuMgoJCQloNC44di0yLjVINDMuOHogTTMxLDIwLjF2LTUuN2g0LjVsNCw1LjdIMzF6Ii8+CgkJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE3LjMsOGMwLDEuMSwwLDIuMiwwLDMuNGMwLDcuNC05LjMsMTAuMi05LjMsMTAuMnMtMS41LDAtMywwdjYuNGgyMS40VjhIMTcuM3oiLz4KCTwvZz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNS43LDMuNEMxMi40LDMuNCw5LjYsMiw4LjYsMEg3LjFDNi4xLDIsMy4zLDMuNCwwLDMuNGMwLDIuMSwwLDUsMCw3LjdjMCw1LjQsOCw4LjUsOCw4LjVzNy43LTIuMyw3LjctOC41CgkJQzE1LjgsOC4xLDE1LjgsNS40LDE1LjcsMy40QzE1LjcsMy40LDE1LjcsMy40LDE1LjcsMy40eiIvPgoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTE0LjUsNC40Yy0yLjgsMC01LjEtMS4yLTYtMi45SDcuM0M2LjQsMy4yLDQsNC40LDEuMyw0LjRjMCwxLjgsMCw0LjIsMCw2LjZjMCw0LjYsNi43LDcuMiw2LjcsNy4yCgkJczYuNS0yLDYuNS03LjJDMTQuNSw4LjQsMTQuNSw2LjEsMTQuNSw0LjRDMTQuNSw0LjQsMTQuNSw0LjQsMTQuNSw0LjR6Ii8+Cgk8Zz4KCQk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNy4zLDEyLjJDNy4zLDEyLjIsNy4yLDEyLjIsNy4zLDEyLjJjLTAuMiwwLTAuNC0wLjEtMC42LTAuMkw0LjgsOS44Yy0wLjMtMC4zLTAuMy0wLjgsMC0xLjEKCQkJYzAuMy0wLjMsMC44LTAuMywxLjEsMGwxLjQsMS41bDIuNi0yLjdjMC4zLTAuMywwLjgtMC4zLDEuMSwwYzAuMywwLjMsMC4zLDAuOCwwLDEuMWwtMy4yLDMuM0M3LjcsMTIuMSw3LjUsMTIuMiw3LjMsMTIuMnoiLz4KCTwvZz4KPC9nPgo8L3N2Zz4K",e}var a={EN:{title:"SAFE DELIVERY!  Don't worry, the safety of our customers is very important to us!",text:"Our couriers change masks every two hours. Delivery and payment are rendered without direct contact."},IN:{title:"सुरक्षित वितरण!  चिंता न करें, हमारे ग्राहकों की सुरक्षा हमारे लिए बहुत महत्वपूर्ण है!",text:"हमारे कोरियर हर दो घंटे में मास्क बदलते हैं।  वितरण और भुगतान सीधे संपर्क के बिना प्रदान किया जाता है।"},LA:{title:"ຈັດສົ່ງທີ່ປອດໄພ! ບໍ່ຕ້ອງກັງວົນ ຄວາມປອດໄພຂອງລູກຄ້າຂອງເຮົາເປັນສີ່ງສຳຄັນຫຼາຍສຳລັບເຮົາ!",text:"ບໍລິການຈັດສົ່ງຂອງເຮົາປ່ຽນຫນ້າກາກທຸກສອງຊົ່ວໂມງ ຈັດສົ່ງແລະຊຳລະເງີນໂດຍບໍ່ຕ້ອງຕິດຕໍ່ໂດຍຕົງ"},NP:{title:"सुरक्षित डेलिभरी! चिन्ता नगर्नुहोस् - हाम्रा ग्राहकहरूको सुरक्षा हाम्रो लागि धेरै महत्त्वपूर्ण छ!",text:"डेलिभरी र पैसाको कारोबार प्रत्यक्ष सम्पर्क बिना गरिन्छ।"},RU:{title:"БЕЗОПАСНАЯ ДОСТАВКА! Не волнуйтесь - безопасность наших клиентов очень важна для нас!",text:"Наши курьеры меняют маски каждые два часа. Доставка и оплата производится без прямого контакта."},AM:{title:"ԱՆՎՏԱՆԳ ԱՌԱՔՈՒՄ! Մի անհանգստացեք, մեր հաճախորդների անվտանգությունը շատ կարևոր է մեզ համար!",text:"Մեր առաքիչները դիմակները փոխում են երկու ժամը մեկ։ Առաքումը և վճարումը կատարվում է առանց անմիջական կապի."},KZ:{title:"БЕЗОПАСНАЯ ДОСТАВКА! Не волнуйтесь - безопасность наших клиентов очень важна для нас!",text:"Наши курьеры меняют маски каждые два часа. Доставка и оплата производится без прямого контакта."},GE:{title:"უსაფრთხო მიწოდება! არ ინერვიულოთ - ჩვენი მომხმარებლების უსაფრთხოება ჩვენთვის ძალიან მნიშვნელოვანია!",text:"ჩვენი კურიერები ნიღბებს ორ საათში ერთხელ იცვლიან. მიწოდება და გადახდა ხდება პირდაპირი კონტაქტის გარეშე."},AZ:{title:"TƏHLÜKƏSİZ ÇATDIRILMA! Narahat olmayın,müştərilərimizin gizliliyi bizim üçün çox vacibdir!",text:"Kuryerlərimiz sizin seçdiyiniz ünvana sifarişinizi təslim edəcək."},FR:{title:"LIVRAISON SÉCURISÉE! Ne vous inquiétez pas — la sécurité de nos clients est très importante pour nous!",text:"Nos coursiers changent de masque toutes les deux heures.  La livraison et le paiement se font sans contact direct."},BJ:{title:"LIVRAISON SÉCURISÉE! Ne vous inquiétez pas — la sécurité de nos clients est très importante pour nous!",text:"Nos coursiers changent de masque toutes les deux heures.  La livraison et le paiement se font sans contact direct."},CI:{title:"LIVRAISON SÉCURISÉE! Ne vous inquiétez pas — la sécurité de nos clients est très importante pour nous!",text:"Nos coursiers changent de masque toutes les deux heures.  La livraison et le paiement se font sans contact direct."},SN:{title:"LIVRAISON SÉCURISÉE! Ne vous inquiétez pas — la sécurité de nos clients est très importante pour nous!",text:"Nos coursiers changent de masque toutes les deux heures.  La livraison et le paiement se font sans contact direct."},ML:{title:"LIVRAISON SÉCURISÉE! Ne vous inquiétez pas — la sécurité de nos clients est très importante pour nous!",text:"Nos coursiers changent de masque toutes les deux heures.  La livraison et le paiement se font sans contact direct."},GN:{title:"LIVRAISON SÉCURISÉE! Ne vous inquiétez pas — la sécurité de nos clients est très importante pour nous!",text:"Nos coursiers changent de masque toutes les deux heures.  La livraison et le paiement se font sans contact direct."},UZ:{title:"Xavfsiz Yetkazib berish! Xavotir olmang - mijozlarimizning xavfsizligi biz uchun juda muhim!",text:"Bizning kurerlarimiz har ikki soatda niqoblarini almashtiradilar. Yetkazib berish va to'lash bevosita aloqasiz amalga oshiriladi."},ES:{title:"¡ENTREGA SEGURA! ¡No se preocupe! Nosotros seriamente nos preocupamos por la seguridad de nuestros clientes!",text:"Nuestros mensajeros se cambian las máscaras y los guantes cada dos horas. El proceso de entrega y pago se realiza sin contacto directo."},BO:{title:"¡ENTREGA SEGURA! ¡No se preocupe! Nosotros seriamente nos preocupamos por la seguridad de nuestros clientes!",text:"Nuestros mensajeros se cambian las máscaras y los guantes cada dos horas. El proceso de entrega y pago se realiza sin contacto directo."},EC:{title:"¡ENTREGA SEGURA! ¡No se preocupe! Nosotros seriamente nos preocupamos por la seguridad de nuestros clientes!",text:"Nuestros mensajeros se cambian las máscaras y los guantes cada dos horas. El proceso de entrega y pago se realiza sin contacto directo."},PE:{title:"¡ENTREGA SEGURA! ¡No se preocupe! Nosotros seriamente nos preocupamos por la seguridad de nuestros clientes!",text:"Nuestros mensajeros se cambian las máscaras y los guantes cada dos horas. El proceso de entrega y pago se realiza sin contacto directo."},MX:{title:"¡ENTREGA SEGURA! ¡No se preocupe! Nosotros seriamente nos preocupamos por la seguridad de nuestros clientes!",text:"Nuestros mensajeros se cambian las máscaras y los guantes cada dos horas. El proceso de entrega y pago se realiza sin contacto directo."},AR:{title:"¡ENTREGA SEGURA! ¡No se preocupe! Nosotros seriamente nos preocupamos por la seguridad de nuestros clientes!",text:"Nuestros mensajeros se cambian las máscaras y los guantes cada dos horas. El proceso de entrega y pago se realiza sin contacto directo."},CO:{title:"¡ENTREGA SEGURA! ¡No se preocupe! Nosotros seriamente nos preocupamos por la seguridad de nuestros clientes!",text:"Nuestros mensajeros se cambian las máscaras y los guantes cada dos horas. El proceso de entrega y pago se realiza sin contacto directo."},CL:{title:"¡ENTREGA SEGURA! ¡No se preocupe! Nosotros seriamente nos preocupamos por la seguridad de nuestros clientes!",text:"Nuestros mensajeros se cambian las máscaras y los guantes cada dos horas. El proceso de entrega y pago se realiza sin contacto directo."},CR:{title:"¡ENTREGA SEGURA! ¡No se preocupe! Nosotros seriamente nos preocupamos por la seguridad de nuestros clientes!",text:"Nuestros mensajeros se cambian las máscaras y los guantes cada dos horas. El proceso de entrega y pago se realiza sin contacto directo."},IT:{title:"CONSEGNA SICURA! Non ti preoccupare! Prendiamo sul serio la sicurezza dei nostri clienti!",text:"I nostri corrieri cambiano maschere e guanti ogni due ore. Il processo di spedizione e pagamento avviene senza contatto diretto."},TH:{title:"การจัดส่งที่ปลอดภัย! ไม่ต้องกังวล! เราคำนึงถึงความปลอดภัยของลูกค้าอย่างจริงจัง!",text:"ผู้ให้บริการจัดส่งสินค้าของเราเปลี่ยนหน้ากากและถุงมือทุกสองชั่วโมง การจัดส่งและการชำระเงินจะเกิดขึ้นโดยไม่ต้องติดต่อโดยตรง"},HU:{title:"BIZTONSÁGOS SZÁLLÍTÁS! Ne aggódjon! Mi komolyan vesszük az ügyfeleink biztonságát!",text:"Futáraink két óránként cserélnek maszkot és kesztyűt. A szállítási és fizetési folyamat közvetlen kapcsolat nélkül zajlik."},RO:{title:"LIVRARE SIGURA! Nu vă faceți griji! Noi luăm în serios siguranța clienților noștri!",text:"Curierii noștri schimbă măștie și mănuși la fiecare două ore. Procesul de livrare și plată are loc fără contact direct."},MD:{title:"LIVRARE SIGURA! Nu vă faceți griji! Noi luăm în serios siguranța clienților noștri!",text:"Curierii noștri schimbă măștie și mănuși la fiecare două ore. Procesul de livrare și plată are loc fără contact direct."},CZ:{title:"BEZPEČNÉ DODÁVÁNÍ! Nebojte se! Bezpečnost našich zákazníků bereme vážně!",text:"Naši kurýři mění masky a rukavice každé dvě hodiny. Proces dodání a platby probíhá bez přímého kontaktu."},SK:{title:"Bezpečné doručenie! Netrápte sa! Vážny sa staráme o bezpečnosť našich zákazníkov!",text:"Naše kuriéri si zmenia ochranné rúška a rukavice každé dve hodiny. Proces doručovania a platby prebieha bez priameho kontaktu!"},HR:{title:"SIGURNA DOSTAVA! Ne brinite se!Sigurnost naših kupaca shvaćamo ozbiljno!",text:"Naši kuriri mijenjaju maske i rukavice svaka dva sata. Postupak dostave i plaćanja odvija se bez izravnog kontakta."},SL:{title:"VARNA DOSTAVA! Brez skrbi! Varnost naših strank jemljemo resno!",text:"Naši kurirji menjajo maske in rokavice vsaki dve uri. Postopek dostave in plačila poteka brez neposrednega stika."},BG:{title:"БЕЗОПАСНА ДОСТАВКА! Не се притеснявайте! Ние приемаме сериозно безопасността на нашите клиенти!",text:"Нашите куриери сменят маски и ръкавици на всеки два часа. Процесът на доставка и плащане се осъществява без директен контакт."},GR:{title:"ΑΣΦΑΛΗ ΠΑΡΑΔΟΣΗ! Μην ανησυχείτε! Λαμβάνουμε σοβαρά υπόψη την ασφάλεια των πελατών μας!",text:"Τα κούριερ μας αλλάζουν μάσκες και γάντια κάθε δύο ώρες. Η διαδικασία παράδοσης και πληρωμής πραγματοποιείται χωρίς άμεση επαφή."},PT:{title:"ENTREGA SEGURA! Não se preocupe! Levamos a sério a segurança de nossos clientes!",text:"Nossos correios trocam máscaras e luvas a cada duas horas. O processo de entrega e pagamento ocorre sem contato direto."},PL:{title:"BEZPIECZNA DOSTAWA! Nie martw się! Poważnie podchodzimy do bezpieczeństwa naszych klientów!",text:"Nasi kurierzy zmieniają maseczki i rękawiczki co dwie godziny. Proces dostawy i płatności odbywa się bez bezpośredniego kontaktu."},AL:{title:"DËRGESË E SIGURT! Mos u shqetëso! Ne e marrim seriozisht sigurinë e klientëve tanë!",text:"Korrierët tanë ndryshojnë maskat dhe dorezat çdo dy orë. Procesi i transportit dhe pagesa zhvillohet pa kontakte të drejtpërdrejta."},NG:{title:"Dear customers, you can request a contactless delivery of your order.",text:"Our couriers follow necessary sanitary requirements and continue to work. Hurry up to get the cheapest deal! Prises will rise soon."},KH:{title:"ការដឹកជញ្ជូនប្រកបដោយសុវត្ថិភាព! សូមកុំបារម្ភ សុវត្ថិភាពរបស់អតិថិជនរបស់យើងគឺជាអត្ថិភាពចំម្បងរបស់យើង!",text:"អ្នកដឹកជញ្ជូនរបស់យើងផ្លាស់ប្តូរម៉ាសរៀងរាល់ពីរម៉ោងម្តង។ ការដឹកជញ្ជូននិងការបង់ប្រាក់គឺធ្វើឡើងដោយមិនចាំបាច់ប៉ះពាល់គ្នាដោយផ្ទាល់នោះទេ។"},LT:{title:"SAUGUS PRISTATYMAS! Nesijaudinkite! Mes rimtai žiūrime į savo klientų saugumą!",text:"Mūsų kurjeriai keičia kaukes ir pirštines kas dvi valandas. Pristatymo ir apmokėjimo procesas vyksta be tiesioginio kontakto."},LV:{title:"DROŠA PIEGĀDE! Neraizējieties - mūsu klientu drošība mums ir ļoti svarīga!",text:"Mūsu kurjeri maina maskas ik pēc divām stundām. Piegādes un apmaksas process norit bez tieša kontakta."},RS:{title:"СИГУРНА ДОСТАВА! Не брините - сигурност наших купаца је веома важна за нас!",text:"Наши курири мењају маске свака два сата. Достава и плаћање се врше без директног контакта."},BA:{title:"СИГУРНА ДОСТАВА! Не брините - сигурност наших купаца је веома важна за нас!",text:"Наши курири мењају маске свака два сата. Достава и плаћање се врше без директног контакта."},ME:{title:"СИГУРНА ДОСТАВА! Не брините - сигурност наших купаца је веома важна за нас!",text:"Наши курири мењају маске свака два сата. Достава и плаћање се врше без директног контакта."},SI:{title:"VARNA DOSTAVA! Brez skrbi - varnost naših strank nam je zelo pomembna!",text:"Naši kurirji menjajo maske vsaki dve uri. Dostava in plačilo se izvedeta brez neposrednega stika."},MK:{title:"БЕЗБЕДНА ДОСТАВА! Не грижете се - безбедноста на нашите клиенти е многу важна за нас!",text:"Нашите доставувачи ги менуваат маските на секои два часа. Доставата и плаќањето се вршат без директен контакт."},TR:{title:"GÜVENLİ TESLİMAT! Merak etmeyin, müşterilerimTeeslimatizin güvenliği bizim için çok önemlidir!",text:"Kuryelerimiz her iki saatte maske değiştirir. Temassiz teslimat ve ödeme."},FI:{title:"TURVALLINEN TOIMITUS! Ei ole mitään syytä huoleen, sillä asiakkaidemme turvallisuus on meille ensisijaisen tärkeää!",text:"Kuriirimme vaihtavat maskit kahden tunnin välein. Toimitus ja maksu suoritetaan lähikontakteja välttäen."},ID:{title:"PENGIRIMAN AMAN! Jangan khawatir, kenyamanan pelanggan sangat penting bagi kami!",text:"Kurir kami mengganti masker setiap dua jam. Pengiriman dan pembayaran dilakukan tanpa kontak langsung."},PH:{title:"Ligtas na Paghahatid! Huwag kayong mag-alala! Pinapahalagahan namin ang kaligtasan ng aming mga customer!",text:"Ang aming mga courier ay nagpapalit ng gloves at face masks ng bawat dalawang oras. Ang proseso ng paghahatid at pagbabayad ay nagaganap nang walang direktang pakikipag-kontak."},BD:{title:"নিরাপদ বিতরণ! চিন্তা করবেন না - আমাদের গ্রাহকদের সুরক্ষা আমাদের জন্য অত্যন্ত গুরুত্বপূর্ণ!",text:"আমাদের কুরিয়ারেরা প্রতি দু ঘন্টা পর মাস্ক পরিবর্তন করে। বিতরণ এবং অর্থ প্রদান সরাসরি যোগাযোগ ছাড়াই করা হয়।"},GT:{title:"¡ENTREGA SEGURA! ¡No se preocupe! Nosotros seriamente nos preocupamos por la seguridad de nuestros clientes!",text:"Nuestros mensajeros se cambian las máscaras y los guantes cada dos horas. El proceso de entrega y pago se realiza sin contacto directo."},EG:{title:"خدمة شحن امنة, لا تقلق, سلامة شحنة عملائنا مهمة جدا بالنسبة لنا",text:"مناديب التوصيل لدينا يضعون كمامة جديدة كل ساعتين, استلام ودفع سعر الشحنة امن وبدون اتصال مباشر"},DE:{title:"SICHERE LIEFERUNG! Keine Sorge - die Sicherheit unserer Kunden ist uns sehr wichtig!",text:"Unsere Kuriere wechseln die Masken alle zwei Stunden. Lieferung und Zahlung erfolgen ohne direkten Kontakt."},SG:{title:"安全送达！别担心，客户的安全对我们来说非常重要！",text:"我们的快递员每两个小时换一次口罩。快递和付款都是无接触进行的。"},TW:{title:"安全送達！別擔心，客戶的安全對我們來說非常重要！",text:"我們的快遞員每兩個小時換一次口罩。快遞和付款都是無接觸進行的。"},HK:{title:"安全送達！別擔心，客戶的安全對我們來說非常重要！",text:"我們的快遞員每兩個小時換一次口罩。快遞和付款都是無接觸進行的。"}},o={color:"#ffffff",background:"red"};return{init:function(t){e(t)}}}();

function getUrlQueryString(){
    var query = window.location.search;

    if( query ){
        var index_str = query.indexOf('?');

        if( index_str != -1 ){
            return window.location.search.slice(index_str + 1);
        }
    }

    return false;
}

function getUrlQueryParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? undefined : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function getAlUserData(name) {
    try {
        var matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    } catch(e) {
        return undefined;
    }
}

function setAlUserData(name, value, options) {
    try {
        options = options || {};

        var expires = options.expires;

        var d = new Date();

        if (typeof expires === "number" && expires) {
            d.setTime(d.getTime() + expires*1000);
            expires = options.expires = d;
        }else{
            d.setTime(d.getTime() + 2592000*1000);
            expires = options.expires = d;
        }
        if (expires && expires.toUTCString) {
            options.expires = expires.toUTCString();
        }

        value = encodeURIComponent(value);

        var updatedCookie = name + "=" + value;

        for(var propName in options) {
            updatedCookie += "; " + propName;
            var propValue = options[propName];
            if (propValue !== true) {
                updatedCookie += "=" + propValue;
            }
        }

        updatedCookie += "; path=/";

        document.cookie = updatedCookie;
    } catch(e) {
        //
    }
}

function getSystemParams(){
    function getApp() {
        try {
            return navigator.appCodeName;
        } catch (err) {
            return null;
        }
    }

    function getAppName() {
        try {
            return navigator.appName;
        } catch (err) {
            return null;
        }
    }

    function getAppVersion() {
        try {
            return navigator.appVersion;
        } catch (err) {
            return null;
        }
    }

    function getAppPlatform() {
        try {
            return navigator.platform;
        } catch (err) {
            return null;
        }
    }

    function getJavaEnabled(){
        try {
            return navigator.javaEnabled();
        } catch (err) {
            return null;
        }
    }

    function getCookieEnabled(){
        try {
            return navigator.cookieEnabled;
        } catch (err) {
            return null;
        }
    }

    function getLanguage() {
        try {
            return (navigator.language || navigator.systemLanguage || navigator.userLanguage || "en").substr(0,2).toLowerCase();
        } catch (err) {
            return null;
        }
    }

    function versionMinor() {
        try {
            var appVersion = navigator.appVersion;

            var pos, versionMinor = 0;

            if ((pos = appVersion.indexOf ("MSIE")) > -1) {
                versionMinor = parseFloat(appVersion.substr (pos+5));
            } else {
                versionMinor = parseFloat(appVersion);
            }

            return (versionMinor);
        } catch (err) {
            return null;
        }
    }

    function versionMajor() {
        try {
            return parseInt(navigator.appVersion,10)
        } catch (err) {
            return null;
        }
    }

    function screenWidth() {
        try {
            if (window.screen) {
                return(screen.width);
            } else {
                return(0);
            }
        } catch (err) {
            return null;
        }
    }

    function screenHeight() {
        try {
            if (window.screen) {
                return(screen.height);
            } else {
                return(0);
            }
        } catch (err) {
            return null;
        }
    }

    function getTzOffset(){
        try {
            var offset = new Date().getTimezoneOffset();
            return (-1)*(offset*60);
        } catch (err) {
            return null;
        }
    }

    return {
        'app': getApp(),
        'app_name': getAppName(),
        'app_version': getAppVersion(),
        'language': getLanguage(),
        'platform': getAppPlatform(),
        'java_enabled': getJavaEnabled(),
        'cookie_enabled': getCookieEnabled(),
        'browser_ver_minor': versionMajor(),
        'browser_ver_major': versionMinor(),
        's_width': screenWidth(),
        's_height': screenHeight(),
        'tz_offset': getTzOffset()
    }
}

function alInitUserData(){
    var qs = getUrlQueryString();

    if( qs ){
        var hashes = qs.split('&');

        if( hashes.length > 0 ){
            for(var i = 0; i < hashes.length; i++){
                var hash = hashes[i].split('=');
                setAlUserData(hash[0], hash[1]);
            }
        }
    }

    setAlUserData('_allocation', window.location.href);

    setAlUserData('_alreferer', document.referrer);

    var _alquery = getAlUserData('_alquery');

    if( typeof _alquery === "undefined" && qs ){
        setAlUserData('_alquery', qs);
    }

    var _alstart = getAlUserData('_alstart');

    if( typeof _alstart === "undefined" ){
        setAlUserData('_alstart', parseInt(Date.now()/1000));
    }

    setAlUserData('_alsystems', JSON.stringify(getSystemParams()));
}

function encodeQueryData(data) {
    return Object.keys(data).map(function(key) {
        return [key, data[key]].map(encodeURIComponent).join("=");
    }).join("&");
}

function alStatPixel() {
    //stat pixel
    var pixel_data = getSystemParams();

    var _allocation = getAlUserData('_allocation');
    if( typeof _allocation !== "undefined" ){
        pixel_data['_allocation'] = _allocation;
    }

    var alstream = getAlUserData('alstream');
    if( typeof alstream !== "undefined" ){
        pixel_data['alstream'] = alstream;
    }

    var _u_alid = getAlUserData('_alid');
    if( _u_alid ){
        pixel_data['_alid'] = _u_alid;
    }else{
        if( typeof _alid !== "undefined" ){
            setAlUserData('_alid', _alid);
            pixel_data['_alid'] = _alid;
        }
    }

    var alunique = getAlUserData('alunique');
    if( typeof alunique === "undefined" ){
        setAlUserData('alunique', 1, {'expires' : 86400});
        pixel_data['alunique'] = 1;
    }else{
        pixel_data['alunique'] = 0;
    }

    var _alstart = getAlUserData('_alstart');
    if( typeof _alstart !== "undefined" ){
        pixel_data['_alstart'] = _alstart;
    }

    var alclick = getAlUserData('alclick');
    if( typeof alclick !== "undefined" ){
        pixel_data['alclick'] = alclick;
    }

    var _alreferer = getAlUserData('_alreferer');
    if( typeof _alreferer !== "undefined" ){
        pixel_data['_alreferer'] = _alreferer;
    }

    var sub_id = getAlUserData('sub_id');
    if( typeof sub_id !== "undefined" ){
        pixel_data['sub_id'] = sub_id;
    }

    var sub_id_1 = getAlUserData('sub_id_1');
    if( typeof sub_id_1 !== "undefined" ){
        pixel_data['sub_id_1'] = sub_id_1;
    }

    var sub_id_2 = getAlUserData('sub_id_2');
    if( typeof sub_id_2 !== "undefined" ){
        pixel_data['sub_id_2'] = sub_id_2;
    }

    var sub_id_3 = getAlUserData('sub_id_3');
    if( typeof sub_id_3 !== "undefined" ){
        pixel_data['sub_id_3'] = sub_id_3;
    }

    var sub_id_4 = getAlUserData('sub_id_4');
    if( typeof sub_id_4 !== "undefined" ){
        pixel_data['sub_id_4'] = sub_id_4;
    }

    var utm_source = getAlUserData('utm_source');
    if( typeof utm_source !== "undefined" ){
        pixel_data['utm_source'] = utm_source;
    }

    var utm_medium = getAlUserData('utm_medium');
    if( typeof utm_medium !== "undefined" ){
        pixel_data['utm_medium'] = utm_medium;
    }

    var utm_campaign = getAlUserData('utm_campaign');
    if( typeof utm_campaign !== "undefined" ){
        pixel_data['utm_campaign'] = utm_campaign;
    }

    var utm_term = getAlUserData('utm_term');
    if( typeof utm_term !== "undefined" ){
        pixel_data['utm_term'] = utm_term;
    }

    var utm_content = getAlUserData('utm_content');
    if( typeof utm_content !== "undefined" ){
        pixel_data['utm_content'] = utm_content;
    }

    pixel_data['rand'] = parseInt(Math.random() * 100000);

    (window.Image ? (new Image()) : document.createElement('img')).src = '/land/collect/?'+encodeQueryData(pixel_data);
}


var jQ = false;

function runLandScriptsParams(land_params) {
    setAlUserData('_alid', land_params['_alid']);
    alStatPixel();

    function runScriptsParams(land_params) {
        if (typeof(jQuery) === 'undefined') {
            if (!jQ) {
                jQ = true;

                var _scr = document.createElement("script");
                _scr.type ="text/javascript";
                _scr.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js";
                var s = document.getElementsByTagName("head")[0];
                s.appendChild(_scr);
            }
            setTimeout(function(){
                runScriptsParams(land_params);
            }, 50);
        } else {
            (function($) {
                $(function() {
                    $('body').append('<div id="al-modal" style="vartical-align: middle;font-family: Helvetica,Arial, sans-serif;font-weight: 400;text-align:center;background: #FFFFFF;border-radius: 10px;box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.16);display: none;left: 50%;margin-left: -200px;margin-top: -100px;opacity: 1;padding: 45px 40px 40px;position: fixed;top: 50%;width: 400px;z-index: 1000;"> <span class="al-modal-close" style="width: 21px;height: 21px;position: absolute;top: 10px;right: 10px;cursor: pointer;display: block;">×</span> <div id="al-modal-content" style="padding: 10px 0 15px 0;"></div> <div class="al-modal-close" style="color: #000;background: linear-gradient(to bottom, #35870d 4%, #297b00 100%) repeat scroll 0 0 rgba(0, 0, 0, 0);border: medium none;border-radius: 5px;box-shadow: 0 -1px 0 0 rgba(13, 69, 9, 1) inset, 0 1px 1px 0 rgba(0, 0, 0, 0.22);color: #fff;cursor: pointer;display: block;text-align: center;text-decoration: none;font-size: 18px;height: 53px;line-height: 53px;margin: 0 auto;width: 235px;">OK</div> </div> <div id="al-modal-overlay" style="z-index: 999; position: fixed; background-color: #efeee9; opacity: 0.8; width: 100%; height: 100%; top: 0; left: 0; cursor: pointer;display: none;"></div>');

                    //modal window
                    function al_modal_show(content){
                        $('#al-modal-content').html(content);
                        $('#al-modal-overlay').fadeIn(400,
                            function(){
                                $('#al-modal')
                                    .css('display', 'block')
                                    .animate({opacity: 1, top: '50%'}, 200);
                            });
                    }

                    function al_modal_close(){
                        $('#al-modal').animate({opacity: 0, top: '45%'}, 200, function(){
                            $(this).css('display', 'none');
                            $('#al-modal-overlay').fadeOut(400);
                        });
                        $('#al-modal-content').empty();
                    }

                    $('body').on('click', '.al-modal-close, #al-modal-overlay', function(){
                        al_modal_close();
                    });

                    //select country by user
                    var obj_offers = $.parseJSON(land_params['offers']);

                    Attention.init(obj_offers);

                    var o_html = '';
                    var has_active_country = false;
                    for ( var o_country_code in obj_offers ){
                        if( o_country_code == land_params['country_code'] ){
                            has_active_country = true;
                        }
                        var item_offer = obj_offers[o_country_code];

                        if( o_country_code == land_params['country_code'] ){
                            option = $('<option></option>', {value: o_country_code, text: item_offer.country, selected: "selected"});
                        }else{
                            option = $('<option></option>', {value: o_country_code, text: item_offer.country});
                        }

                        var outerHTML = option[0].outerHTML;

                        if ( typeof outerHTML !== "undefined" ) {
                            html_option = option[0].outerHTML;
                        } else {
                            html_option = option.clone().wrap('<div></div>').parent().html();
                        }

                        //o_html += $('option')'<option value="'+o_country_code+'">' + item_offer.country + '</option>';
                        o_html += html_option;
                    }

                    $('.al-country').each(function(i,e){
                        $(this).append(o_html);

                        if(has_active_country){
                            active_val = land_params['country_code'];
                        }else{
                            active_val = $(this).find("option[value!='']:first").val();
                        }
                        $(this).val(active_val);
                        $(this).find("option[value='"+active_val+"']:first").prop('selected', true);
                    });

                    if( typeof active_val != 'undefined' ){
                        al_change_country_handler(obj_offers, active_val);
                    }

                    //change country event handler
                    function al_change_country(){
                        var current_country_code = $(this).val();
                        obj_offers = $.parseJSON(land_params['offers']);
                        al_change_country_handler(obj_offers, current_country_code);
                    }

                    $('body').on('change', '.al-country', al_change_country);

                    //form submit
                    function al_form_submit(){
                        var _form = $(this);
                        var order_params = _form.serialize();

                        $.ajax({
                            beforeSend: function(){
                                showLoad();
                            },
                            url: '/land/order?'+order_params,
                            data: order_params,
                            dataType: 'json',
                            type: 'POST',
                            success: function (response){
                                if(response.status == 'ok'){
                                    var url = '/success.html';

                                    if( response.url ){
                                        url = response.url;
                                    }

                                    var fb_pixel_lead = getUrlQueryParameterByName('fb_pixel_lead');

                                    if( typeof(fb_pixel_lead) !== 'undefined' ){
                                        if( url.indexOf('?') !== -1 ){
                                            url = url + '&fb_pixel_lead=' + fb_pixel_lead;
                                        }else{
                                            url = url + '?fb_pixel_lead=' + fb_pixel_lead;
                                        }
                                    }

                                    window.location.href = url;
                                    //notify_msg(response.data, 'success');
                                }else if(response.status == 'error'){
                                    notify_msg(response.data, 'error');
                                }else{
                                    notify_msg('Unknown error', 'error');
                                }
                            },
                            error:function (xhr, ajaxOptions, thrownError){
                                notify_msg('Server error', 'error');
                            }
                        });
                        return false;
                    }

                    $('body').on('submit', '.al-form', al_form_submit);

                    function notify_msg(msg, type){
                        removeLoad();
                        if( type == 'error' ){
                            msg = '<span style="color: #a94442;"><strong>' + msg + '</strong></span>';
                        }else if( type == 'success' ){
                            msg = '<strong><span style="color: #3c763d;">' + msg + '</span></strong>';
                        }
                        al_modal_show(msg);
                    }

                    function showLoad(){
                        $('body').prepend('<div id="pre-load-al-request" style="bottom: 0; left: 0; margin: auto;position: fixed;right: 0;top: 0;z-index: 999999999;"><div style="left: 0; margin: 0 auto;position: absolute;right: 0;top: 50%;"><div style="height: 50px; margin: 0 auto; position: relative; width: 300px; text-align: center; line-height: 50px; font-size: 20px; font-weight: bold;color: #333333;background: #FFFFFF; border-radius: 6px;box-shadow: 0 0 0 6px rgba(153, 153, 153, .3);">Loading...</div></div></div>');
                    }

                    function removeLoad(){
                        $('#pre-load-al-request').remove();
                    }

                    function al_change_country_handler(current_offers, current_country_code){
                        var offer = current_offers[current_country_code];

                        if( typeof offer == 'undefined' ){
                            $('.al-cost').html('-');
                            $('.al-cost-promo').html('-');
                            $('.al-cost-delivery').html('-');
                            $('.al-cost-sum').html('-');
                        }else{
                            $('.al-cost').html(offer.cost + ' ' + offer.currency);
                            $('.al-cost-promo').html(offer.cost_promo + ' ' + offer.currency);
                            $('.al-cost-delivery').html(offer.cost_delivery + ' ' + offer.currency);

                            var sum = parseInt(offer.cost) + parseInt(offer.cost_delivery);
                            $('.al-cost-sum').html(sum + ' ' + offer.currency);

                            $('.al-raw-cost').html(offer.cost);
                            $('.al-raw-cost-promo').html(offer.cost_promo);
                            $('.al-raw-cost-delivery').html(offer.cost_delivery);
                            $('.al-raw-cost-sum').html(sum);
                            $('.al-raw-currency').html(offer.currency);
                        }
                    }

                    var fb_pixel_land = getUrlQueryParameterByName('fb_pixel_land');

                    if( typeof(fb_pixel_land) === 'undefined' && "fb_pixel" in land_params ){
                        fb_pixel_land = land_params['fb_pixel'];
                    }

                    if ( fb_pixel_land ){
                        !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
                            n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
                            t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
                            document,'script','//connect.facebook.net/en_US/fbevents.js');

                        var fb_pixels = fb_pixel_land.split('|');

                        for(var i in fb_pixels){
                            fbq('init', fb_pixels[i]);
                            fbq('track', 'PageView');
                        }
                    }

                    var fb_pixel_lead = getUrlQueryParameterByName('fb_pixel_lead');

                    if( typeof(fb_pixel_lead) === 'undefined' && "fb_pixel_lead" in land_params ){
                        fb_pixel_lead = land_params['fb_pixel_lead'];
                    }

                    if( fb_pixel_lead && land_params['page_type'] === 'success' ){
                        !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
                            n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
                            t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
                            document,'script','//connect.facebook.net/en_US/fbevents.js');

                        var fb_pixels = fb_pixel_lead.split('|');

                        for(var i in fb_pixels){
                            fbq('init', fb_pixels[i]);
                            fbq('track', 'Lead');
                        }
                    }

                    if ("iframe_url" in land_params){
                        var iframe = document.createElement('IFRAME');
                        iframe.setAttribute('src', land_params['iframe_url']);
                        iframe.style.display = 'none !important';
                        iframe.setAttribute('height', '1');
                        iframe.setAttribute('width', '1');
                        iframe.setAttribute('border', '0');
                        iframe.setAttribute('frameborder', '0');
                        iframe.setAttribute('scrolling', 'no');
                        iframe.setAttribute('seamless', 'seamless');

                        document.body.appendChild(iframe);
                    }

                    if ("footer_script" in land_params && land_params["footer_script"]){
                        var _scr = document.createElement("script");
                        _scr.type ="text/javascript";
                        _scr.src = "/script_footer.js?country_code="+land_params["country_code"];
                        var s = document.getElementsByTagName("head")[0];
                        s.appendChild(_scr);
                    }

                    if ("script_langing" in land_params && land_params["script_langing"]){
                        var _scr = document.createElement("script");
                        _scr.type ="text/javascript";
                        _scr.src = "/land/script?mode=land&alstream="+land_params["script_langing"];
                        var s = document.getElementsByTagName("head")[0];
                        s.appendChild(_scr);
                    }

                    if ("script_success" in land_params && land_params["script_success"]){
                        var _scr = document.createElement("script");
                        _scr.type ="text/javascript";
                        _scr.src = "/land/script?mode=success&alstream="+land_params["script_success"];
                        var s = document.getElementsByTagName("head")[0];
                        s.appendChild(_scr);
                    }
                })
            })(jQuery)
        }
    }

    runScriptsParams(land_params);
}

function alGetData() {
    var data = {
        'lang': (navigator.language || navigator.systemLanguage || navigator.userLanguage || "en").substr(0,2).toLowerCase(),
        'rand': parseInt(Math.random() * 100000)
    };

    var _allocation = getAlUserData('_allocation');
    if( typeof _allocation !== "undefined" ){
        data['location'] = _allocation;
    }

    var alstream = getAlUserData('alstream');
    if( typeof alstream !== "undefined" ){
        data['alstream'] = alstream;
    }

    var _scr = document.createElement("script");
    _scr.type ="text/javascript";
    _scr.src = "/land/params/?"+encodeQueryData(data);
    //_scr.async = true;
    var s = document.getElementsByTagName("head")[0];
    s.appendChild(_scr);
}

function alCounters() {
}

try{
    //Init user data
    alInitUserData();
    alGetData();
    alCounters();
}catch(e){
}