package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class EbayPage {
    public EbayPage(){
        PageFactory.initElements(Driver.getDriver(), this);}

    @FindBy( xpath = "//input[@aria-label='Search for anything']")
    public WebElement aramaKutusu;

    @FindBy ( xpath = "//div[@class= 'srp-controls__control srp-controls__count']")
    public WebElement sonucSayisi;
}
