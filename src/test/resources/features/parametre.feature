@urunarama1
Feature:  Amazon Urun Arama
  Scenario: TC04_kullanici amazonda urun aramasi yapar
    Given kullanici amazon sayfasina gider
    And kullanici arama kutusuna "selenium" yazar ve arar
    Then kullanici sonuc sayisini ekrana yazdirir