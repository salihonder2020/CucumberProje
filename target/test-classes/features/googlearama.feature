Feature: Google Arama
  Scenario: TC01_kullanici googleda arama yapar
    Given kullanici google sayfasina gider
    Given Ich stimme zu tiklanir
    And techproeducation aramasi yapar
    Then sayfa basligini kontrol eder
    #Yorum
