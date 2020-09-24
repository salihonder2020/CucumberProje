@deneme_amazon_arama @amazon
Feature: Amazon Arama Deneme
Background: Oncesinde Calisacak Method (Before Method)
  Given kullanici amazon sitesine gider
  @deneme_amazon_arama_kitap01
  Scenario: TC002 kullanici amazonda arama yapar

    And kullanici arama kutusuna glass yazar ve arar
    Then kullanici sonucu ekrana yazdirir
  @deneme_amazon_arama_kitap02
  Scenario: TC002 kullanici amazonda arama yapar

    And kullanici arama kutusuna kitap02 yazar ve arar
    Then kullanici sonucu ekrana yazdirir
