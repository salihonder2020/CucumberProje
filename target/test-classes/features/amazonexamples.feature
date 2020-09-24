@birdenfazlaexamples @amazon
  Feature: Amazonda urun arama
    Scenario Outline: TC07 kullanici amazonda dropdown kullanarak arama kutusunda arama yapar
      Given kullanici amazon "http://amazon.com" sayfasina gider
      And kullanici amazon dropdownda "<kategori>" secer
      And kullanici amazon arama kutusuna "<urunismi>" yazar ve arar
      Then kullanici amazon sonuc sayisini ekrana yazdirir

      Examples: Test Verileri
        | kategori |urunismi  |
        | Automotive |phone holder  |
        | Baby |stroller  |
        | Books |Miserables  |

