package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.openqa.selenium.Keys;
import pages.EbayPage;
import utilities.ConfigurationReader;
import utilities.Driver;

public class EbayStepDefinitions {
    EbayPage ebayPage = new EbayPage();

    @Given("kullanici ebay internet sayfasina gider")
    public void kullanici_ebay_internet_sayfasina_gider() {
    Driver.getDriver().get(ConfigurationReader.getProperty("ebay_link"));
    }

    @Given("kullanici arama kutusuna belirledigi {string} yazar ve arar")
    public void kullanici_arama_kutusuna_belirledigi_yazar_ve_arar(String string) {
     ebayPage.aramaKutusu.sendKeys(string + Keys.ENTER);
    }

    @Then("kullanici sonuc sayisinin hepsini ekrana yazdirir")
    public void kullanici_sonuc_sayisinin_hepsini_ekrana_yazdirir() {
        System.out.println(ebayPage.sonucSayisi.getText());
    }
}
