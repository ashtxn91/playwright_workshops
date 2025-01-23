import { test, expect } from "@playwright/test";

test("Elements, text box", async ({ page }) => {
  await page.goto("https://demoqa.com/");
  await page.getByRole("heading", { name: "Elements" }).click();
  await page.locator("li").filter({ hasText: "Text Box" }).click();
  await page.getByPlaceholder("Full Name").click();
  await page.getByPlaceholder("Full Name").fill("John");
  await page.getByPlaceholder("Full Name").press("Tab");
  await page.getByPlaceholder("name@example.com").fill("jsmith1@email.com");
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page.locator("#name")).toContainText("Name:John");
  await expect(page.locator("#email")).toContainText("Email:jsmith1@email.com");
});
