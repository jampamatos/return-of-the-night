import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("chapter reader", () => {
  test("uses the cover as the entry and opens the book from project home", async ({
    page,
  }) => {
    await page.goto("/en/");

    const openBookCoverLink = page.getByRole("link", {
      name: "Open the Book",
    });

    await expect(openBookCoverLink).toHaveAttribute("href", "/en/home/");
    await openBookCoverLink.click();
    await expect(page).toHaveURL(/\/en\/home\/$/);

    const openBookLink = page.getByRole("link", { name: "Open the book" });
    await expect(openBookLink).toHaveAttribute("href", "/en/book/");
    await openBookLink.click();
    await expect(page).toHaveURL(/\/en\/book\/$/);
  });

  test("resumes the latest chapter from project home", async ({ page }) => {
    const chapterPath = "/en/book/getting-started/reading-the-book/";

    await page.goto(chapterPath);
    await page.goto("/en/home/");

    await expect(
      page.getByRole("link", { name: "Open the book" }),
    ).toHaveAttribute("href", chapterPath);
  });

  test("uses a compact book layout on notebook-sized screens", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    await page.goto("/en/book/");

    const toc = page.locator(".book-toc");
    await expect(toc).toBeVisible();

    const tocWidth = await toc.evaluate((element) =>
      Math.round(element.getBoundingClientRect().width),
    );
    expect(tocWidth).toBeLessThanOrEqual(864);

    await page.evaluate(() => window.scrollTo(0, 300));
    await expect(page.locator("[data-site-header]")).toHaveClass(
      /is-condensed/,
    );
  });

  test("renders the rich-content fixture and switches reading mode", async ({
    page,
  }) => {
    await page.goto("/en/book/getting-started/reading-the-book/");

    await expect(
      page.getByRole("heading", { level: 1, name: "How to Read This Book" }),
    ).toBeVisible();
    await expect(page.locator("figure")).toHaveCount(1);
    await expect(page.locator(".reader-table")).toHaveCount(2);
    await expect(page.locator(".reader-columns")).toHaveCount(1);
    await expect(page.locator(".reader-callout")).toHaveCount(3);

    const playerBlock = page.getByText(
      "This player-facing placeholder reserves an explanation",
    );
    const gmBlock = page.getByText(
      "This GM-facing placeholder reserves a reminder",
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
    await page.goto("/en/book/getting-started/reading-the-book/");

    const results = await new AxeBuilder({ page }).analyze();

    expect(results.violations).toEqual([]);
  });
});
