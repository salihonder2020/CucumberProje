package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.openqa.selenium.Keys;
import pages.EbaydaAramaPage;
import utilities.Driver;

public class EbaydaAramaStepDefinitions {

EbaydaAramaPage ebaydaAramaPage = new EbaydaAramaPage();
    @Given("kullanici {string} sayfasina gider")
    public void kullanici_sayfasina_gider(String string) {
        Driver.getDriver().get(string);
    }

    @Given("kullanici ebayda arama kutusuna {string} yazar")
    public void kullanici_ebayda_arama_kutusuna_yazar(String string) {
        ebaydaAramaPage.aramaKutusu.sendKeys(string + Keys.ENTER);
    }

    @Then("kullanici buldugu sonuclari ekrana yazdirir")
    public void kullanici_buldugu_sonuclari_ekrana_yazdirir() {
        System.out.println(ebaydaAramaPage.sonucSayisi.getText());
    }

}
