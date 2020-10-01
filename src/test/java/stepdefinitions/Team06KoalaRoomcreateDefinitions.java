package stepdefinitions;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;
import pages.KoalaPalacePage;
import utilities.Driver;
public class Team06KoalaRoomcreateDefinitions {
    KoalaPalacePage page = new KoalaPalacePage();
    @Given("team06_kullanici koalapalace admin sayfasina gider")
    public void team06_kullanici_koalapalace_admin_sayfasina_gider() {
        Driver.getDriver().get("http://www.kaolapalace-qa-environment.com/Account/LogOn?ReturnUrl=%2Fadmin%2FHotelroomAdmin");
    }

    @Given("team06_kullanici kullaniciadi ve sifresini girer")
    public void team06_kullanici_kullaniciadi_ve_sifresini_girer() {
        page.userNameKutusu.sendKeys("manager2");
        page.passwordKutusu.sendKeys("Man1ager2!");
    }

    @Then("team06_kullanici giris islemini gerceklestirir")
    public void team06_kullanici_giris_islemini_gerceklestirir() {
        page.girisButonu.click();
    }

    @Given("team06_kullanici hotelroomcreate sayfasina gider")
    public void team06_kullanici_hotelroomcreate_sayfasina_gider() {
        Driver.getDriver().get("http://www.kaolapalace-qa-environment.com/admin/HotelroomAdmin/Create");
    }

    @Given("team06_kullanici hotelroomcreate idhotel bolumunde {string} secer")
    public void team06_kullanici_hotelroomcreate_idhotel_bolumunde_secer(String string) {
        Select select1 = new Select(page.hotelRoomCreateIDHotelDropdown);
        select1.selectByVisibleText(string);
    }

    @Given("team06_kullanici hotelroomcreate code bolumune {string} girer")
    public void team06_kullanici_hotelroomcreate_code_bolumune_girer(String string) {
        page.hotelRoomCreateCodeKutusu.sendKeys(string);
    }

    @Given("team06_kullanici hotelroomcreate name bolumune {string} girer")
    public void team06_kullanici_hotelroomcreate_name_bolumune_girer(String string) {
        page.hotelRoomCreateNameKutusu.sendKeys(string);
    }

    @Given("team06_kullanici hotelroomcreate location bolumune {string} girer")
    public void team06_kullanici_hotelroomcreate_location_bolumune_girer(String string) {
        page.hotelRoomCreateLocationKutusu.sendKeys(string);
    }

    @Given("team06_kullanici hotelroomcreate description bolumune {string} girer")
    public void team06_kullanici_hotelroomcreate_description_bolumune_girer(String string) {
        page.hotelRoomCreateDescriptionKutusu.sendKeys(string);
    }

    @Given("team06_kullanici hotelroomcreate price bolumune fiyat girer")
    public void team06_kullanici_hotelroomcreate_price_bolumune_fiyat_girer() {
        Actions actions = new Actions(Driver.getDriver());
        actions.dragAndDrop(page.hotelRoomCreatePrice500 , page.hotelRoomCreatePriceKutusu)
                .perform();
    }

    @Given("team06_kullanici hotelroomcreate roomtype bolumunde {string} secer")
    public void team06_kullanici_hotelroomcreate_roomtype_bolumunde_secer(String string) {
        Select select2 = new Select(page.hotelRoomCreateIDGroupRoomTypeDropDown);
        select2.selectByVisibleText(string);
    }

    @Given("team06_kullanici hotelroomcreate maxadult bolumune {string} girer")
    public void team06_kullanici_hotelroomcreate_maxadult_bolumune_girer(String string) {
        page.hotelRoomCreateMaxAdultKutusu.sendKeys(string);
    }

    @Given("team06_kullanici hotelroomcreate maxchildren bolumune {string} girer")
    public void team06_kullanici_hotelroomcreate_maxchildren_bolumune_girer(String string) {
        page.hotelRoomCreateMaxChildKutusu.sendKeys(string);
    }

    @Given("team06_kullanici hotelroomcreate save butonuna tiklar")
    public void team06_kullanici_hotelroomcreate_save_butonuna_tiklar() {
        try {
            Thread.sleep(10000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        page.hotelRoomCreateSaveButonu.click();
    }


    @Then("team06_kullanici roomreservation kayit isleminin basarisiz oldugunu assert eder")
    public void team06_kullanici_roomreservation_kayit_isleminin_basarisiz_oldugunu_assert_eder() {
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println(page.hataMesaji.getText());
        Assert.assertTrue(page.hataMesaji.isDisplayed());
    }
    }

