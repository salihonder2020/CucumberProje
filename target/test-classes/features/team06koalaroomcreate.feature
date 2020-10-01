@team06_koalapalace_hotelroomcreate
Feature: Team06 Koala Palace Room Create

  Background: Koala Palace Admin Giris
    Given team06_kullanici koalapalace admin sayfasina gider
    And team06_kullanici kullaniciadi ve sifresini girer
    Then team06_kullanici giris islemini gerceklestirir
  @team06_hotelroomcreate1
  Scenario: TC01_team06_kullanici bilgleri eksik girerek hotel room olusturur
    Given team06_kullanici hotelroomcreate sayfasina gider
    #And team06_kullanici hotelroomcreate idhotel bolumunde "Star" secer
    And team06_kullanici hotelroomcreate code bolumune "4900" girer
    And team06_kullanici hotelroomcreate name bolumune "Boni Garcia" girer
    And team06_kullanici hotelroomcreate location bolumune "Langenthal" girer
    And team06_kullanici hotelroomcreate description bolumune "Ah Techproed Ah!" girer
    And team06_kullanici hotelroomcreate price bolumune fiyat girer
    And team06_kullanici hotelroomcreate roomtype bolumunde "Double" secer
    And team06_kullanici hotelroomcreate maxadult bolumune "2" girer
    And team06_kullanici hotelroomcreate maxchildren bolumune "3" girer
    And team06_kullanici hotelroomcreate save butonuna tiklar
    Then team06_kullanici roomreservation kayit isleminin basarisiz oldugunu assert eder
  @team06_hotelroomcreate2
  Scenario: TC02_team06_kullanici bilgleri eksik girerek hotel room olusturur
    Given team06_kullanici hotelroomcreate sayfasina gider
    And team06_kullanici hotelroomcreate idhotel bolumunde "Star" secer
    #And team06_kullanici hotelroomcreate code bolumune "4900" girer
    And team06_kullanici hotelroomcreate name bolumune "Boni Garcia" girer
    And team06_kullanici hotelroomcreate location bolumune "Langenthal" girer
    And team06_kullanici hotelroomcreate description bolumune "Ah Techproed Ah!" girer
    And team06_kullanici hotelroomcreate price bolumune fiyat girer
    And team06_kullanici hotelroomcreate roomtype bolumunde "Double" secer
    And team06_kullanici hotelroomcreate maxadult bolumune "2" girer
    And team06_kullanici hotelroomcreate maxchildren bolumune "3" girer
    And team06_kullanici hotelroomcreate save butonuna tiklar
    Then team06_kullanici roomreservation kayit isleminin basarisiz oldugunu assert eder
  @team06_hotelroomcreate3
  Scenario: TC03_team06_kullanici bilgleri eksik girerek hotel room olusturur
    Given team06_kullanici hotelroomcreate sayfasina gider
    And team06_kullanici hotelroomcreate idhotel bolumunde "Star" secer
    And team06_kullanici hotelroomcreate code bolumune "4900" girer
    #And team06_kullanici hotelroomcreate name bolumune "Boni Garcia" girer
    And team06_kullanici hotelroomcreate location bolumune "Langenthal" girer
    And team06_kullanici hotelroomcreate description bolumune "Ah Techproed Ah!" girer
    And team06_kullanici hotelroomcreate price bolumune fiyat girer
    And team06_kullanici hotelroomcreate roomtype bolumunde "Double" secer
    And team06_kullanici hotelroomcreate maxadult bolumune "2" girer
    And team06_kullanici hotelroomcreate maxchildren bolumune "3" girer
    And team06_kullanici hotelroomcreate save butonuna tiklar
    Then team06_kullanici roomreservation kayit isleminin basarisiz oldugunu assert eder
  @team06_hotelroomcreate4
  Scenario: TC04_team06_kullanici bilgleri eksik girerek hotel room olusturur
    Given team06_kullanici hotelroomcreate sayfasina gider
    And team06_kullanici hotelroomcreate idhotel bolumunde "Star" secer
    And team06_kullanici hotelroomcreate code bolumune "4900" girer
    And team06_kullanici hotelroomcreate name bolumune "Boni Garcia" girer
   # And team06_kullanici hotelroomcreate location bolumune "Langenthal" girer
    And team06_kullanici hotelroomcreate description bolumune "Ah Techproed Ah!" girer
    And team06_kullanici hotelroomcreate price bolumune fiyat girer
    And team06_kullanici hotelroomcreate roomtype bolumunde "Double" secer
    And team06_kullanici hotelroomcreate maxadult bolumune "2" girer
    And team06_kullanici hotelroomcreate maxchildren bolumune "3" girer
    And team06_kullanici hotelroomcreate save butonuna tiklar
    Then team06_kullanici roomreservation kayit isleminin basarisiz oldugunu assert eder
  @team06_hotelroomcreate5
  Scenario: TC05_team06_kullanici bilgleri eksik girerek hotel room olusturur
    Given team06_kullanici hotelroomcreate sayfasina gider
    And team06_kullanici hotelroomcreate idhotel bolumunde "Star" secer
    And team06_kullanici hotelroomcreate code bolumune "4900" girer
    And team06_kullanici hotelroomcreate name bolumune "Boni Garcia" girer
    And team06_kullanici hotelroomcreate location bolumune "Langenthal" girer
    And team06_kullanici hotelroomcreate description bolumune "Ah Techproed Ah!" girer
    # And team06_kullanici hotelroomcreate price bolumune fiyat girer
    And team06_kullanici hotelroomcreate roomtype bolumunde "Double" secer
    And team06_kullanici hotelroomcreate maxadult bolumune "2" girer
    And team06_kullanici hotelroomcreate maxchildren bolumune "3" girer
    And team06_kullanici hotelroomcreate save butonuna tiklar
    Then team06_kullanici roomreservation kayit isleminin basarisiz oldugunu assert eder
  @team06_hotelroomcreate6
  Scenario: TC06_team06_kullanici bilgleri eksik girerek hotel room olusturur
    Given team06_kullanici hotelroomcreate sayfasina gider
    And team06_kullanici hotelroomcreate idhotel bolumunde "Star" secer
    And team06_kullanici hotelroomcreate code bolumune "4900" girer
    And team06_kullanici hotelroomcreate name bolumune "Boni Garcia" girer
    And team06_kullanici hotelroomcreate location bolumune "Langenthal" girer
    And team06_kullanici hotelroomcreate description bolumune "Ah Techproed Ah!" girer
    And team06_kullanici hotelroomcreate price bolumune fiyat girer
    # And team06_kullanici hotelroomcreate roomtype bolumunde "Double" secer
    And team06_kullanici hotelroomcreate maxadult bolumune "2" girer
    And team06_kullanici hotelroomcreate maxchildren bolumune "3" girer
    And team06_kullanici hotelroomcreate save butonuna tiklar
    Then team06_kullanici roomreservation kayit isleminin basarisiz oldugunu assert eder
  @team06_hotelroomcreate7
  Scenario: TC07_team06_kullanici bilgleri eksik girerek hotel room olusturur
    Given team06_kullanici hotelroomcreate sayfasina gider
    And team06_kullanici hotelroomcreate idhotel bolumunde "Star" secer
    And team06_kullanici hotelroomcreate code bolumune "4900" girer
    And team06_kullanici hotelroomcreate name bolumune "Boni Garcia" girer
    And team06_kullanici hotelroomcreate location bolumune "Langenthal" girer
    And team06_kullanici hotelroomcreate description bolumune "Ah Techproed Ah!" girer
    And team06_kullanici hotelroomcreate price bolumune fiyat girer
    And team06_kullanici hotelroomcreate roomtype bolumunde "Double" secer
    # And team06_kullanici hotelroomcreate maxadult bolumune "2" girer
    And team06_kullanici hotelroomcreate maxchildren bolumune "3" girer
    And team06_kullanici hotelroomcreate save butonuna tiklar
    Then team06_kullanici roomreservation kayit isleminin basarisiz oldugunu assert eder
  @team06_hotelroomcreate8
  Scenario: TC08_team06_kullanici bilgleri eksik girerek hotel room olusturur
    Given team06_kullanici hotelroomcreate sayfasina gider
    And team06_kullanici hotelroomcreate idhotel bolumunde "Star" secer
    And team06_kullanici hotelroomcreate code bolumune "4900" girer
    And team06_kullanici hotelroomcreate name bolumune "Boni Garcia" girer
    And team06_kullanici hotelroomcreate location bolumune "Langenthal" girer
    And team06_kullanici hotelroomcreate description bolumune "Ah Techproed Ah!" girer
    And team06_kullanici hotelroomcreate price bolumune fiyat girer
    And team06_kullanici hotelroomcreate roomtype bolumunde "Double" secer
    And team06_kullanici hotelroomcreate maxadult bolumune "2" girer
    # And team06_kullanici hotelroomcreate maxchildren bolumune "3" girer
    And team06_kullanici hotelroomcreate save butonuna tiklar
    Then team06_kullanici roomreservation kayit isleminin basarisiz oldugunu assert eder

