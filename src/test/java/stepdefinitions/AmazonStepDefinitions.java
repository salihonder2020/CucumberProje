package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.openqa.selenium.Keys;
import org.openqa.selenium.support.ui.Select;
import pages.AmazonPage;
import utilities.Driver;

public class AmazonStepDefinitions {

    AmazonPage amazonPage = new AmazonPage();

    @Given("kullanici amazon sayfasina gider")
    public void kullanici_amazon_sayfasina_gider() {
        Driver.getDriver().get("http://amazon.com");
    }
    @Given("kullanici arama kutusuna headphones yazar ve arar")
    public void kullanici_arama_kutusuna_headphones_yazar_ve_arar() {
        amazonPage.aramaKutusu.sendKeys("headphones" + Keys.ENTER);
    }
    @Then("kullanici kactane sonuc buldugunu ekrana yazdirir")
    public void kullanici_kactane_sonuc_buldugunu_ekrana_yazdirir() {
        System.out.println(amazonPage.sonucSayisi.getText());
    }

    @Given("kullanici arama kutusuna camera yazar ve arar")
    public void kullanici_arama_kutusuna_camera_yazar_ve_arar() {
        amazonPage.aramaKutusu.sendKeys("camera" + Keys.ENTER);
    }

    @Then("kullanici sonuc sayisini ekrana yazdirir")
    public void kullanici_sonuc_sayisini_ekrana_yazdirir() {
        System.out.println(amazonPage.sonucSayisi.getText());
    }
    @Given("kullanici arama kutusuna {string} yazar ve arar")
    public void kullanici_arama_kutusuna_yazar_ve_arar(String string) {
        amazonPage.aramaKutusu.sendKeys(string+Keys.ENTER);

    }


    @Given("kullanici amazon {string} sayfasina gider")
    public void kullanici_amazon_sayfasina_gider(String string) {
        Driver.getDriver().get(string);
    }

    @Given("kullanici amazon dropdownda {string} secer")
    public void kullanici_amazon_dropdownda_secer(String string) {
        Select select = new Select(amazonPage.dropDown);
        select.selectByVisibleText(string);
    }

    @Given("kullanici amazon arama kutusuna {string} yazar ve arar")
    public void kullanici_amazon_arama_kutusuna_yazar_ve_arar(String string) {
       amazonPage.aramaKutusu.sendKeys(string + Keys.ENTER);
    }

    @Then("kullanici amazon sonuc sayisini ekrana yazdirir")
    public void kullanici_amazon_sonuc_sayisini_ekrana_yazdirir() {
        System.out.println(amazonPage.sonucSayisi.getText());
    }


}
