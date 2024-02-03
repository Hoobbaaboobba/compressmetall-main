-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "label" TEXT[],
    "marks" TEXT[],
    "sizes" TEXT[],
    "type" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "variety" TEXT NOT NULL,
    "isInStock" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "metaTitle" TEXT NOT NULL,
    "pageTitle" TEXT NOT NULL,
    "firstTypeOfSize" TEXT NOT NULL,
    "secondTypeOfSize" TEXT,
    "secondSizes" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "thirdTypeOfSize" TEXT,
    "thirdSizes" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "forthTypeOfSize" TEXT,
    "firthSizes" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "fifthtypeOfSize" TEXT,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Menu" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Menu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MenuCategory" (
    "id" SERIAL NOT NULL,
    "href" TEXT NOT NULL,
    "metaData" TEXT NOT NULL,

    CONSTRAINT "MenuCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MenuLink" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "metaData" TEXT NOT NULL,

    CONSTRAINT "MenuLink_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_id_key" ON "Product"("id");

-- AddForeignKey
ALTER TABLE "MenuCategory" ADD CONSTRAINT "MenuCategory_id_fkey" FOREIGN KEY ("id") REFERENCES "Menu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MenuLink" ADD CONSTRAINT "MenuLink_id_fkey" FOREIGN KEY ("id") REFERENCES "MenuCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
