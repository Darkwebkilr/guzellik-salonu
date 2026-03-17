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
    longDescription: "Ankara'nın hava şartları ve şehir stresi cildinizi yormasın. Parlaten Güzellik Salonu olarak, dünya markası ürünler ve medikal cihazlarla sunduğumuz profesyonel cilt bakımı, cildinizi derinlemesine temizlerken gözeneklerin sıkılaşmasına ve cildin nefes almasına yardımcı olur. Kişiye özel protokollerimizle; akne, leke ve yaşlanma karşıtı bakımlarda kalıcı çözümler sunuyoruz. Işıltılı ve sağlıklı bir cilt için Altındağ Güneşevler'deki modern salonumuza bekliyoruz.",
    image: "/cilt-bakimi.jpg",
    benefits: ["Hydrafacial & Medikal Bakım", "Gözenek Sıkılaştırma ve Akne Tedavisi", "Leke Protokolleri", "Anti-Aging & Kolajen Desteği"]
  },
  {
    slug: "lazer-epilasyon",
    title: "Lazer Epilasyon",
    shortDescription: "Hybrid Alexandrite ve Buz Epilasyon teknolojisi ile kalıcı pürüzsüzlük.",
    longDescription: "İstenmeyen tüylerden kurtulmak hiç bu kadar konforlu olmamıştı. Ankara Lazer Epilasyon sektöründe yeni bir soluk getiren salonumuzda, hibrit teknoloji ve buz başlık ile acısız ve her cilt tipine uygun uygulamalar yapıyoruz. Uzman estetisyenlerimiz eşliğinde, kıl köklerini hedef alan güvenli sistemimizle 6-8 seansta kalıcı pürüzsüzlüğün keyfini çıkarın.",
    image: "/hybrid alexandrite ve buz epilasyon.jpg",
    benefits: ["Hybrid Alexandrite Teknolojisi", "Buz Başlık (Acısız Uygulama)", "4 Mevsim Güvenli Epilasyon", "Kalıcı ve Etkili Sonuçlar"]
  },
  {
    slug: "igneli-epilasyon",
    title: "İğneli Epilasyon",
    shortDescription: "En ince ve sarı tüylerde bile kesin çözüm sunan profesyonel yöntem.",
    longDescription: "Lazer epilasyonun görmediği açık renkli, beyaz veya çok ince tüyler için en kesin çözüm olan iğneli epilasyon, uzmanlık gerektiren bir sanattır. Ankara'daki uzman ekibimiz, steril iğneler kullanarak kıl köklerine yaptığı hassas müdahalelerle tüylerden ömür boyu kurtulmanızı sağlar. Yüz bölgesi ve vücudun hassas noktalarında kusursuz sonuçlar için doğru adrestesiniz.",
    image: "/igneli-epilasyon.jpg",
    benefits: ["%100 Kesin ve Kalıcı Çözüm", "Sarı ve Beyaz Tüylerde Etkili", "Kişiye Özel Steril İğneler", "Hassas ve Profesyonel Uygulama"]
  },
  {
    slug: "microblading",
    title: "Microblading Kıl Tekniği",
    shortDescription: "Kaşlarınıza yüz hatlarınıza uygun, doğal ve kalıcı bir form kazandırıyoruz.",
    longDescription: "Ankara Microblading ve kalıcı makyaj uygulamalarında profesyonel tasarımın farkını hissedin. Kıl tekniği ile kendi kaşınızdan ayırt edilemeyecek doğallıkta sonuçlar yaratıyoruz. Altın oran ölçümleriyle yüz hatlarınıza en uygun tasarımı belirliyor, kaliteli pigmentlerle uzun süreli ve canlı bir görünüm sağlıyoruz. Bakışlarınıza anlam katacak kusursuz kaşlar için randevunuzu oluşturun.",
    image: "/mikroblading-kil-teknigi.avif",
    benefits: ["Doğal Kıl Tekniği Görünümü", "Altın Oran Tasarımı", "Kalıcı ve Canlı Renkler", "Uzman Uygulama ve Hijyen"]
  },
  {
    slug: "manikur-pedikur",
    title: "Manikür & Pedikür",
    shortDescription: "El ve ayak bakımında hijyenik ve estetik dokunuşlar.",
    longDescription: "Sağlıklı ve bakımlı ellerin/ayakların sırrı düzenli bakımda gizlidir. Salonumuzda sterilizasyon kurallarına tam uyum sağlayarak sunduğumuz manikür ve pedikür hizmetleri ile kendinizi şımartın. Tırnak eti temizliği, tırnak şekillendirme ve rahatlatıcı masaj uygulamalarımızla elleriniz ve ayaklarınız her zaman bakımlı kalsın.",
    image: "/manikur.jpg",
    benefits: ["Tam Sterilizasyon ve Hijyen", "Profesyonel Tırnak Şekillendirme", "Yumuşatıcı Bakım Kürleri", "Estetik ve Modern Görünüm"]
  },
  {
    slug: "kalici-oje",
    title: "Kalıcı Oje & Nail Art",
    shortDescription: "Haftalarca süren parlaklık ve kusursuz tırnaklar.",
    longDescription: "Günlük hayatın koşuşturmacasında oje tazeleme derdine son verin. Kalıcı oje uygulamalarımızla tırnaklarınız haftalarca ilk günkü parlaklığını ve kusursuzluğunu korur. Geniş renk yelpazemiz ve isteğe bağlı nail art çalışmalarımızla tarzınızı tırnaklarınıza yansıtın.",
    image: "/kalici-oje.jpg",
    benefits: ["3-4 Hafta Kalıcılık", "Çizilmelere Karşı Dayanıklı", "Zengin Renk Seçenekleri", "Hızlı ve Pratik Uygulama"]
  },
  {
    slug: "kalici-makyaj",
    title: "Kalıcı Makyaj Uygulamaları",
    shortDescription: "Eyeliner, dipliner ve dudak renklendirme ile her an bakımlı olun.",
    longDescription: "Her sabah makyaj yapma zahmetinden kurtulun. Kalıcı eyeliner, dipliner ve dudak renklendirme işlemlerimizle doğal güzelliğinizi ön plana çıkarıyoruz. Kaliteli pigmentler ve hassas tekniklerle uyguladığımız kalıcı makyaj, yüzünüze tazelik ve canlılık katar.",
    image: "/kalici-makyaj.jpg",
    benefits: ["Zaman Tasarrufu ve Konfor", "Suya ve Terlemeye Dayanıklı", "Doğal ve Canlı Pigmentler", "Yüz Hatlarını Belirginleştirme"]
  },
  {
    slug: "kas-dizayni",
    title: "Profesyonel Kaş Dizaynı",
    shortDescription: "Bakışlarınızı değiştiren, yüzünüze uygun kaş şekillendirme.",
    longDescription: "Kaşlar, yüzün ifadesini belirleyen en önemli unsurdur. Uzmanlarımız, yüz şeklinize ve göz yapınıza en uygun kaş formunu belirleyerek bakışlarınıza derinlik ve anlam katar. Kaş alımı, şekillendirme ve boyama seçeneklerimizle kusursuz bir görünüme kavuşun.",
    image: "/kas-dizayni.jpg",
    benefits: ["Yüz Şekline Uygun Form", "Simetrik ve Düzgün Kaşlar", "Uzun Süre Kalıcı Şekil", "Doğal Görünüm Odaklı"]
  },
  {
    slug: "profesyonel-makyaj",
    title: "Profesyonel Makyaj",
    shortDescription: "Özel günlerinizde profesyonel dokunuşlarla parlayın.",
    longDescription: "Düğün, nişan, mezuniyet gibi tüm özel davetlerinizde profesyonel makyaj hizmetimizle kendinizi yıldız gibi hissedin. Cilt tipinize ve giysinize en uygun renkleri seçerek, yüz hatlarınızı ön plana çıkaran ve gece boyu kalıcılığını koruyan uygulamalar yapıyoruz.",
    image: "/profesyonel-makyaj.jpg",
    benefits: ["Dünya Markası Ürünler", "Gece Boyu Yüksek Kalıcılık", "Kişiye Özel Renk Analizi", "Gelin ve Davet Makyajı"]
  },
  {
    slug: "agda",
    title: "Profesyonel Ağda Hizmetleri",
    shortDescription: "Hijyenik koşullarda, hassas ve temiz bir uygulama.",
    longDescription: "Geleneksel ve etkili tüy alma yöntemi olan ağda, uzman ellerde pürüzsüz bir deneyime dönüşür. Salonumuzda tek kullanımlık malzemeler ve cilt tipine uygun ürünlerle sunduğumuz ağda hizmeti, istenmeyen tüylerden hızlıca kurtulmanızı sağlarken cildinizi ölü deriden arındırır.",
    image: "/agda.jpg",
    benefits: ["Tam Hijyen ve Tek Kullanımlık Ürünler", "Pürüzsüz ve Yumuşak Cilt", "Hassas Bölgelere Özel Ürünler", "Hızlı ve Etkili Uygulama"]
  },
  {
    slug: "bolgesel-incelme",
    title: "Bölgesel İncelme",
    shortDescription: "Vücut hatlarınızı şekillendiren, selülit karşıtı profesyonel çözümler.",
    longDescription: "Diyet ve egzersize dirençli bölgelerdeki yağ birikimlerinden kurtulmak artık hayal değil. Ankara Bölgesel İncelme merkezimizde, son teknoloji cihazlarımızla kan dolaşımını hızlandırıyor, ödem atımını sağlıyor ve vücudunuzu sıkılaştırıyoruz. Uzmanlarımızın size özel hazırlayacağı programlarla; göbek, basen ve kol bölgelerinde gözle görülür incelme ve pürüzsüz bir cilt görünümü elde edin.",
    image: "/bolgesel-incelme.jpg",
    benefits: ["Etkili Selülit Tedavisi", "Doku Sıkılaştırma ve Şekillendirme", "Ödem ve Toksin Atımı", "Kişiye Özel Seans Planlaması"]
  }
];
