@ebay
Feature: Ebay Arama

  @ebaysearc
  Scenario Outline: TC003_kullanici ebayda urunler arar
    Given kullanici ebay internet sayfasina gider
    And kullanici arama kutusuna belirledigi "<urunlerim>" yazar ve arar
    Then kullanici sonuc sayisinin hepsini ekrana yazdirir

    Examples: Urun Isimlerim
      |urunlerim|
      |car|
      |babywagen|
      |bycicle |
