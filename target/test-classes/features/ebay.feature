@ebay
Feature: Ebayda Arama Yapma
  @ebaydaarama
  Scenario Outline:
    Given kullanici "http://ebay.com" sayfasina gider
    And kullanici ebayda arama kutusuna "<kelime>" yazar
    Then kullanici buldugu sonuclari ekrana yazdirir

    Examples: Test Verileri
    |kelime|
    |araba |
    |bebek arabasi|
    |bisiklet     |
    |Gemi Kira Sozlesmesi|
    |Bareboat Charter Contract|