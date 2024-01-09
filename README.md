**Eticaret Sistemi Projesi**

Bu proje, Engin Demiroğ'un C# & Angular yazılım geliştirme kampı kapsamında geliştirilen bir eticaret sistemini simüle etmektedir. Projede, ASP.Net Core ile backend ve Angular ile frontend kullanılarak, SOLID prensiplerine uyum ve n-Layered Architecture ile ölçeklenebilir bir yapı hedeflenmiştir.

**Proje Açıklaması**

Proje, bir eticaret sistemi simülasyonunu gerçekleştirmektedir. Kullanıcılar, ürünleri görüntüleyebilir, kategorilere göre filtreleme yapabilir, sepete ürün ekleyebilir, sipariş verebilir ve kullanıcı profillerini yönetebilirler.

**Kullanılan Teknolojiler**

*Backend:*
- ASP.Net Core
- Entity Framework Core (Code First)
- JWT Authentication
- Autofac (Bağımlılık Enjeksiyonu)
- FluentValidation (Doğrulama)
- Swagger (API Dokümantasyonu)

*Frontend:*
- Angular
- Angular CLI
- Bootstrap (Stil)
- RxJS (Asenkron Programlama)

**Proje Yapısı ve Katmanlar**

Projede, n-Layered Architecture kullanılmıştır. Aşağıdaki ana katmanlar bulunmaktadır:

- **Core:** Temel yapıları, genel araçları ve yardımcı sınıfları içerir.
- **DataAccess:** Veritabanı işlemleri için data access katmanını içerir. Entity Framework kullanılmıştır.
- **Business:** İş kuralları, servisler ve iş mantığı içerir.
- **Entities:** Veritabanı tablolarını temsil eden entity sınıflarını içerir.
- **WebAPI:** Kullanıcı arayüzü olmayan, sadece HTTP API sağlayan katmanı içerir.
- **UI:** Angular frontend projesini içerir.

**Kurulum ve Çalıştırma**

*Backend:*
1. Visual Studio veya Visual Studio Code kullanarak projeyi açın.
2. Veritabanı bağlantı ayarlarını `appsettings.json` dosyasında yapılandırın.
3. Proje ana dizininde terminal veya komut istemcisini açın ve `dotnet ef database update` komutunu çalıştırarak veritabanını oluşturun.
4. Projeyi çalıştırın (`F5` veya `dotnet run`).

*Frontend:*
1. Terminal veya komut istemcisini açın 
2. `npm install` komutu ile gerekli npm paketlerini yükleyin.
3. `ng serve` komutu ile Angular uygulamasını başlatın.

API Kullanımı

API endpoint'lerini keşfetmek için tarayıcıyı kullanabilir veya Swagger API Dokümantasyonu sayfasını ziyaret edebilirsiniz.

Ekran Görüntüleri




...
![image](https://github.com/Busra-nur-tosun/MyFinalProjectFrontend/assets/74898825/5cd4a71c-3b2b-4f0b-a478-6c3089481366)
![image](https://github.com/Busra-nur-tosun/MyFinalProjectFrontend/assets/74898825/0cfe1741-6141-4bf7-9a0b-6b8f18b3a3fa)
![image](https://github.com/Busra-nur-tosun/MyFinalProjectFrontend/assets/74898825/9f28c059-e2fb-4ab8-9c41-453625386e49)





