import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("chapter reader", () => {
  test("uses the cover as the entry and opens the book from project home", async ({
    page,
  }) => {
    await page.goto("/en/");

    const openBookCoverLink = page.getByRole("link", {
      name: "Access public build",
    });

    await expect(openBookCoverLink).toHaveAttribute("href", "/en/home/");
    await openBookCoverLink.click();
    await expect(page).toHaveURL(/\/en\/home\/$/);

    const coverLink = page.getByRole("link", { name: "Return of the Night" });
    await expect(coverLink).toHaveAttribute("href", "/en/");

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

  test("shows the support signal on every internal surface, not the cover", async ({
    page,
  }) => {
    await page.goto("/en/");
    await expect(page.getByRole("contentinfo")).toHaveCount(0);

    for (const path of [
      "/en/home/",
      "/en/book/",
      "/en/glossary/",
      "/en/book/getting-started/reading-the-book/",
    ]) {
      await page.goto(path);
      await expect(
        page.getByRole("contentinfo", { name: "Support" }),
      ).toBeVisible();
      await expect(page.getByText("Support signal")).toBeVisible();
    }
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

  test("updates the reading-mode preference without assuming a chapter map", async ({
    page,
  }) => {
    await page.goto("/en/book/");

    await page.getByRole("button", { name: "GM" }).click();
    await expect(page.locator("html")).toHaveAttribute("data-audience", "gm");

    await page.getByRole("button", { name: "Player" }).click();
    await expect(page.locator("html")).toHaveAttribute(
      "data-audience",
      "player",
    );
  });

  test("keeps the desktop reader header on one continuous system bar", async ({
    page,
  }) => {
    for (const path of [
      "/en/book/getting-started/reading-the-book/",
      "/pt-BR/book/o-mundo-sob-o-dia-infinito/",
    ]) {
      await page.setViewportSize({ width: 1366, height: 768 });
      await page.goto(path);

      const headerHeight = await page
        .locator("[data-site-header]")
        .evaluate((element) =>
          Math.round(element.getBoundingClientRect().height),
        );

      expect(headerHeight).toBeLessThan(90);
    }
  });

  test("keeps header navigation compact and keyboard-dismissible on mobile", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/en/book/");

    const menu = page.getByRole("button", { name: "Open navigation menu" });
    const navigation = page.locator("[data-site-navigation]");

    await expect(navigation).toBeHidden();
    await menu.click();
    await expect(menu).toHaveAttribute("aria-expanded", "true");
    await expect(navigation).toBeVisible();

    await page.keyboard.press("Escape");
    await expect(menu).toHaveAttribute("aria-expanded", "false");
    await expect(navigation).toBeHidden();
  });

  test("persists reader themes and limits paper to book routes", async ({
    page,
  }) => {
    await page.goto("/en/book/");

    await page.getByRole("button", { name: "Light" }).click();
    await expect(page.locator("html")).toHaveAttribute("data-theme", "light");

    await page.reload();
    await expect(page.locator("html")).toHaveAttribute("data-theme", "light");

    await page.getByRole("button", { name: "Paper" }).click();
    await expect(page.locator("html")).toHaveAttribute("data-theme", "paper");

    await page.goto("/en/home/");
    await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
    await expect(page.getByRole("button", { name: "Paper" })).toHaveCount(0);

    await page.goto("/en/book/");
    await expect(page.locator("html")).toHaveAttribute("data-theme", "paper");
  });

  test("returns to the chapter opening from long reader content", async ({
    page,
  }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("/en/book/getting-started/reading-the-book/");
    await page.evaluate(() => window.scrollTo(0, 900));

    const backToTop = page.getByRole("button", { name: "Back to top" });
    await expect(backToTop).toBeVisible();
    await backToTop.click();

    await expect
      .poll(() => page.evaluate(() => window.scrollY))
      .toBeLessThan(5);
    await expect(page.locator("#reader-route-title")).toBeFocused();
  });

  test("switches a reader route to the equivalent localized chapter", async ({
    page,
  }) => {
    await page.goto("/en/book/getting-started/reading-the-book/");

    await page.getByRole("link", { name: "pt-BR" }).click();

    await expect(page).toHaveURL(
      /\/pt-BR\/book\/o-mundo-sob-o-dia-infinito\/$/,
    );
    await expect(
      page.getByRole("heading", { level: 1, name: "Três Vidas" }),
    ).toBeVisible();
  });

  test("shows a localized fallback state when a translation is unavailable", async ({
    page,
  }) => {
    await page.goto("/pt-BR/book/#translation-unavailable");

    await expect(page.locator("[data-translation-unavailable]")).toContainText(
      "Tradução indisponível",
    );
    await expect(
      page.getByText(
        "Este capítulo ainda não tem uma versão publicada em PT-BR.",
      ),
    ).toBeVisible();
  });

  test("opens an inline glossary definition and its index entry", async ({
    page,
  }) => {
    await page.goto("/en/book/getting-started/reading-the-book/");

    const term = page.getByRole("button", { name: "arcology" });
    await term.click();

    const definition = page.getByRole("complementary", {
      name: "Glossary definition",
    });
    await expect(definition).toBeVisible();
    await expect(definition).toContainText("Arcology");

    await definition.getByRole("button", { name: "Close definition" }).click();
    await expect(definition).toBeHidden();
    await expect(term).not.toBeFocused();

    await term.click();
    await definition.getByRole("link", { name: "Open in glossary" }).click();
    await expect(page).toHaveURL(/\/en\/glossary\/#arcology$/);
    await expect(
      page.getByRole("heading", { level: 1, name: "Glossary" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { level: 2, name: "Arcology" }),
    ).toBeVisible();
  });

  test("uses a compact glossary dialog below the reader rail breakpoint", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/en/book/getting-started/reading-the-book/");

    await page.getByRole("button", { name: "arcology" }).click();

    const definition = page.getByRole("dialog", {
      name: "Glossary definition",
    });
    await expect(definition).toBeVisible();
    await expect(definition).toContainText("Arcology");

    await page.keyboard.press("Escape");
    await expect(definition).toBeHidden();
  });

  test("has no detectable accessibility violations on the reader fixture", async ({
    page,
  }) => {
    await page.goto("/en/book/getting-started/reading-the-book/");

    const results = await new AxeBuilder({ page }).analyze();

    expect(results.violations).toEqual([]);
  });
});
