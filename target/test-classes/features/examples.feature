@teknolojikarama
  Feature: Amazon Birden Fazla Arama

    Scenario Outline: TC_kullanici amazonda urun arar
Given kullanici amazon sayfasina gider
      And kullanici arama kutusuna "<urunler>" yazar ve arar
      Then kullanici sonuc sayisini ekrana yazdirir

      Examples: Urun Isimleri
      |urunler|
      |headphones|
      |camera    |
      |pencil    |
      |tv        |