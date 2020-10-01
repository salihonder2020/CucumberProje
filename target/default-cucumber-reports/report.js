$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/koalapalace.feature");
formatter.feature({
  "name": "Koala Palace",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@koalapalace"
    }
  ]
});
formatter.background({
  "name": "Koala Palace Admin Giris",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "kullanici koalapalace admin sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_koalapalace_admin_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici kullaniciadi ve sifresini girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_kullaniciadi_ve_sifresini_girer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici giris islemini gerceklestirir",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_giris_islemini_gerceklestirir()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC25_kullanici hotellist sayfasinda code girerek hotel arar",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@koalapalace"
    },
    {
      "name": "@hotelsearchnegative01"
    }
  ]
});
formatter.step({
  "name": "kullanici hotellist sayfasina gider",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_hotellist_sayfasina_gider()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici hotellist code bolumune \"-10\" girer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_hotellist_code_bolumune_girer(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici hotellist search butonuna tiklar",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_hotellist_search_butonuna_tiklar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "kullanici hotellist sonuc bolumunde kayit bulunamadi yazisini gorur",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.KoalaPalaceStepDef.kullanici_hotellist_sonuc_bolumunde_kayit_bulunamadi_yazisini_gorur()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});