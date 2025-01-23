import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://demoqa.com/checkbox");
  await page.getByLabel("Toggle").click();
  await page.getByLabel("Expand all").click();
  await page
    .locator("label")
    .filter({ hasText: "Notes" })
    .locator("path")
    .first()
    .click();
  await page
    .locator("label")
    .filter({ hasText: "Notes" })
    .getByRole("img")
    .first()
    .click();
  await expect(page.locator("#result")).toContainText("notes");
  await page
    .locator("label")
    .filter({ hasText: "Notes" })
    .locator("path")
    .first()
    .click();
  await page
    .locator("label")
    .filter({ hasText: "Documents" })
    .getByRole("img")
    .first()
    .click();
  await expect(page.locator("#result")).toContainText(
    "You have selected :documentsworkspacereactangularveuofficepublicprivateclassifiedgeneral"
  );
  await page.getByLabel("Collapse all").click();
});
