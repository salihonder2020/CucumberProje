@amazon
Feature: Amazon Arama
  Background: Oncesinde Calisacek Method (Before Method)
    Given kullanici amazon sayfasina gider
  @amazonheadphones
  Scenario: TC02_kullanici amazonda arama yapar

    And kullanici arama kutusuna headphones yazar ve arar
    Then kullanici kactane sonuc buldugunu ekrana yazdirir

  @amazoncamera
  Scenario: TC03_kullanici amazonda arama yapar

    And kullanici arama kutusuna camera yazar ve arar
    Then kullanici sonuc sayisini ekrana yazdirir