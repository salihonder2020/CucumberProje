package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.openqa.selenium.Keys;
import pages.AmazonPageDeneme;
import utilities.ConfigurationReader;
import utilities.Driver;

public class AmazonStepDefinitionsDeneme {
    AmazonPageDeneme amazonPageDeneme = new AmazonPageDeneme();
    @Given("kullanici amazon sitesine gider")
    public void kullanici_amazon_sitesine_gider() {
        Driver.getDriver().get(ConfigurationReader.getProperty("amazon_link"));
    }

    @Given("kullanici arama kutusuna glass yazar ve arar")
    public void kullanici_arama_kutusuna_glass_yazar_ve_arar() {
        amazonPageDeneme.aramaKutusu.sendKeys(ConfigurationReader.getProperty("deneme_aranacak_kelime1") + Keys.ENTER);
    }
    @Given("kullanici arama kutusuna kitap02 yazar ve arar")
    public void kullanici_arama_kutusuna_kitap02_yazar_ve_arar() {
        amazonPageDeneme.aramaKutusu.sendKeys(ConfigurationReader.getProperty("deneme_aranacak_kelime2") + Keys.ENTER);

    }

    @Then("kullanici sonucu ekrana yazdirir")
    public void kullanici_sonucu_ekrana_yazdirir() {
        System.out.println(amazonPageDeneme.sonucSayisi.getText());
    }

}
