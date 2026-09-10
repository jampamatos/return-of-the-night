import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("chapter reader", () => {
  test("renders the rich-content fixture and switches reading mode", async ({
    page,
  }) => {
    await page.goto("/en/book/test/test-1/");

    await expect(
      page.getByRole("heading", { level: 1, name: "Test 1" }),
    ).toBeVisible();
    await expect(page.locator("figure")).toHaveCount(1);
    await expect(page.locator(".reader-table")).toHaveCount(2);
    await expect(page.locator(".reader-columns")).toHaveCount(1);
    await expect(page.locator(".reader-callout")).toHaveCount(3);

    const playerBlock = page.getByText(
      "This player-facing block can contain ordinary Markdown",
    );
    const gmBlock = page.getByText(
      "This GM-facing block can contain prep notes",
    );

    await expect(playerBlock).toBeVisible();
    await expect(gmBlock).toBeHidden();

    await page.getByRole("button", { name: "GM" }).click();

    await expect(page.locator("html")).toHaveAttribute("data-audience", "gm");
    await expect(playerBlock).toBeHidden();
    await expect(gmBlock).toBeVisible();
  });

  test("has no detectable accessibility violations on the reader fixture", async ({
    page,
  }) => {
    await page.goto("/en/book/test/test-1/");

    const results = await new AxeBuilder({ page }).analyze();

    expect(results.violations).toEqual([]);
  });
});
