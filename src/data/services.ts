export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  benefits: string[];
}

export const services: Service[] = [
  {
    slug: "cilt-bakimi",
    title: "Profesyonel Cilt Bakımı",
    shortDescription: "Ankara'nın merkezinde, cildinizin ihtiyacı olan tüm vitamin ve mineralleri uzman kadromuzla sağlıyoruz.",
    longDescription: "Ankara'nın hava şartları ve şehir stresi cildinizi yormasın. Parlaten Güzellik Salonu olarak, dünya markası ürünler ve medikal cihazlarla sunduğumuz profesyonel cilt bakımı, cildinizi derinlemesine temizlerken gözeneklerin sıkılaşmasına ve cildin nefes almasına yardımcı olur. Kişiye özel protokollerimizle; akne, leke ve yaşlanma karşıtı bakımlarda kalıcı çözümler sunuyoruz. Işıltılı ve sağlıklı bir cilt için Ankara Çankaya'daki modern salonumuza bekliyoruz.",
    image: "/cilt-bakimi.jpg",
    benefits: ["Hydrafacial & Medikal Bakım", "Gözenek Sıkılaştırma ve Akne Tedavisi", "Leke Protokolleri", "Anti-Aging & Kolajen Desteği"]
  },
  {
    slug: "lazer-epilasyon",
    title: "Yeni Nesil Lazer Epilasyon",
    shortDescription: "Son teknoloji cihazlarımızla acısız, konforlu ve kalıcı pürüzsüzlük Ankara'da.",
    longDescription: "İstenmeyen tüylerden kurtulmak hiç bu kadar konforlu olmamıştı. Ankara Lazer Epilasyon sektöründe yeni bir soluk getiren salonumuzda, buz başlık teknolojisi ile acısız ve her cilt tipine uygun uygulamalar yapıyoruz. Uzman estetisyenlerimiz eşliğinde, kıl köklerini hedef alan güvenli sistemimizle 6-8 seansta kalıcı pürüzsüzlüğün keyfini çıkarın. Hijyen ve sonuç odaklı hizmet anlayışımızla tanışın.",
    image: "/lazer-epilasyon.jpg",
    benefits: ["Buz Başlık Teknolojisi (Acısız)", "4 Mevsim Uygulama İmkanı", "Kalıcı ve Hızlı Sonuçlar", "FDA Onaylı Güvenli Sistem"]
  },
  {
    slug: "igneli-epilasyon",
    title: "Geleneksel İğneli Epilasyon",
    shortDescription: "En ince ve sarı tüylerde bile kesin çözüm sunan profesyonel yöntem.",
    longDescription: "Lazer epilasyonun görmediği açık renkli, beyaz veya çok ince tüyler için en kesin çözüm olan iğneli epilasyon, uzmanlık gerektiren bir sanattır. Ankara'daki uzman ekibimiz, steril iğneler kullanarak kıl köklerine yaptığı hassas müdahalelerle tüylerden ömür boyu kurtulmanızı sağlar. Yüz bölgesi ve vücudun hassas noktalarında kusursuz sonuçlar için doğru adrestesiniz.",
    image: "/igneli-epilasyon.jpg",
    benefits: ["%100 Kesin ve Kalıcı Çözüm", "Sarı ve Beyaz Tüylerde Etkili", "Kişiye Özel Steril İğneler", "Hassas ve Profesyonel Uygulama"]
  },
  {
    slug: "mikroblading",
    title: "Microblading & Kaş Tasarımı",
    shortDescription: "Kaşlarınıza yüz hatlarınıza uygun, doğal ve kalıcı bir form kazandırıyoruz.",
    longDescription: "Ankara Microblading ve kalıcı makyaj uygulamalarında profesyonel tasarımın farkını hissedin. Kıl tekniği ile kendi kaşınızdan ayırt edilemeyecek doğallıkta sonuçlar yaratıyoruz. Altın oran ölçümleriyle yüz hatlarınıza en uygun tasarımı belirliyor, kaliteli pigmentlerle uzun süreli ve canlı bir görünüm sağlıyoruz. Bakışlarınıza anlam katacak kusursuz kaşlar için randevunuzu oluşturun.",
    image: "/mikroblading.avif",
    benefits: ["Altın Oran Kaş Tasarımı", "Doğal Kıl Tekniği Uygulaması", "Alerji Yapmayan Kaliteli Pigmentler", "Yüz Hatlarını Belirginleştirme"]
  },
  {
    slug: "eyeliner",
    title: "Kalıcı Eyeliner & Dipliner",
    shortDescription: "Bakışlarınıza derinlik katan, akmayan ve kusursuz kalıcı makyaj uygulamaları.",
    longDescription: "Her sabah makyaj yapma zahmetine son verin. Kalıcı eyeliner ve dipliner uygulamalarımızla gözlerinizi ön plana çıkarıyoruz. Ankara'nın yoğun iş temposunda her zaman bakımlı görünmek isteyen kadınlar için ideal olan bu uygulama, suya dayanıklı pigmentlerle yapılır ve bakışlarınıza yıllarca sürecek bir derinlik katar. Acısız ve konforlu uygulama ile gözlerinizdeki ışıltıyı keşfedin.",
    image: "/eyeliner.jpg",
    benefits: ["Zaman Tasarrufu ve Konfor", "Simetrik ve Kusursuz Çizgiler", "Suya ve Terlemeye Dayanıklı", "Her Zaman Bakımlı Bakışlar"]
  }
];
