$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/walmart.feature");
formatter.feature({
  "name": "Walmart Urun Arama",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@walmart"
    }
  ]
});
formatter.scenarioOutline({
  "name": "TC08_kullanici walmartta urun arar",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "kullanici \"https://walmart.com\" sayfasina gider",
  "keyword": "Given "
});
formatter.step({
  "name": "kullanici walmart aramakutusuna \"\u003ckelime\u003e\" yazar ve arar",
  "keyword": "And "
});
formatter.step({
  "name": "kullanici walmart sonuc sayisini ekrana yazdirir",
  "keyword": "Then "
});
formatter.examples({
  "name": "Test Verileri",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "kelime"
      ]
    },
    {
      "cells": [
        "calculator"
      ]
    },
    {
      "cells": [
        "watch"
      ]
    },
    {
      "cells": [
        "flower"
      ]
    }
  ]
});
formatter.scenario({
  "name": "TC08_kullanici walmartta urun arar",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@walmart"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"https://walmart.com\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.EbaydaAramaStepDefinitions.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici walmart aramakutusuna \"calculator\" yazar ve arar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.WalmartStepDefinitions.kullanici_walmart_aramakutusuna_yazar_ve_arar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici walmart sonuc sayisini ekrana yazdirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.WalmartStepDefinitions.kullanici_walmart_sonuc_sayisini_ekrana_yazdirir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "TC08_kullanici walmartta urun arar",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@walmart"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"https://walmart.com\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.EbaydaAramaStepDefinitions.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici walmart aramakutusuna \"watch\" yazar ve arar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.WalmartStepDefinitions.kullanici_walmart_aramakutusuna_yazar_ve_arar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici walmart sonuc sayisini ekrana yazdirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.WalmartStepDefinitions.kullanici_walmart_sonuc_sayisini_ekrana_yazdirir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "TC08_kullanici walmartta urun arar",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@walmart"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici \"https://walmart.com\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.EbaydaAramaStepDefinitions.kullanici_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici walmart aramakutusuna \"flower\" yazar ve arar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.WalmartStepDefinitions.kullanici_walmart_aramakutusuna_yazar_ve_arar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici walmart sonuc sayisini ekrana yazdirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.WalmartStepDefinitions.kullanici_walmart_sonuc_sayisini_ekrana_yazdirir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
}); arama yapar",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@birdenfazlaexamples"
    },
    {
      "name": "@amazon"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici amazon \"http://amazon.com\" sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_amazon_sayfasina_gider(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici amazon dropdownda \"Books\" secer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_amazon_dropdownda_secer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici amazon arama kutusuna \"Miserables\" yazar ve arar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_amazon_arama_kutusuna_yazar_ve_arar(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici amazon sonuc sayisini ekrana yazdirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_amazon_sonuc_sayisini_ekrana_yazdirir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/amazonsearch.feature");
formatter.feature({
  "name": "Amazon Arama",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@amazon"
    }
  ]
});
formatter.background({
  "name": "Oncesinde Calisacek Method (Before Method)",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici amazon sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_amazon_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC02_kullanici amazonda arama yapar",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@amazon"
    },
    {
      "name": "@amazonheadphones"
    }
  ]
});
formatter.step({
  "name": "kullanici arama kutusuna headphones yazar ve arar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_arama_kutusuna_headphones_yazar_ve_arar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kactane sonuc buldugunu ekrana yazdirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_kactane_sonuc_buldugunu_ekrana_yazdirir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Oncesinde Calisacek Method (Before Method)",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici amazon sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_amazon_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC03_kullanici amazonda arama yapar",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@amazon"
    },
    {
      "name": "@amazoncamera"
    }
  ]
});
formatter.step({
  "name": "kullanici arama kutusuna camera yazar ve arar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_arama_kutusuna_camera_yazar_ve_arar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici sonuc sayisini ekrana yazdirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitions.kullanici_sonuc_sayisini_ekrana_yazdirir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/amazonsearchdeneme.feature");
formatter.feature({
  "name": "Amazon Arama Deneme",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@deneme_amazon_arama"
    },
    {
      "name": "@amazon"
    }
  ]
});
formatter.background({
  "name": "Oncesinde Calisacak Method (Before Method)",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici amazon sitesine gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitionsDeneme.kullanici_amazon_sitesine_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC002 kullanici amazonda arama yapar",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@deneme_amazon_arama"
    },
    {
      "name": "@amazon"
    },
    {
      "name": "@deneme_amazon_arama_kitap01"
    }
  ]
});
formatter.step({
  "name": "kullanici arama kutusuna glass yazar ve arar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitionsDeneme.kullanici_arama_kutusuna_glass_yazar_ve_arar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici sonucu ekrana yazdirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitionsDeneme.kullanici_sonucu_ekrana_yazdirir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Oncesinde Calisacak Method (Before Method)",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici amazon sitesine gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitionsDeneme.kullanici_amazon_sitesine_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC002 kullanici amazonda arama yapar",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@deneme_amazon_arama"
    },
    {
      "name": "@amazon"
    },
    {
      "name": "@deneme_amazon_arama_kitap02"
    }
  ]
});
formatter.step({
  "name": "kullanici arama kutusuna kitap02 yazar ve arar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitionsDeneme.kullanici_arama_kutusuna_kitap02_yazar_ve_arar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici sonucu ekrana yazdirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.AmazonStepDefinitionsDeneme.kullanici_sonucu_ekrana_yazdirir()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});