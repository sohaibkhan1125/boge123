/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://ai-generator_owner:KAetnrIT9G3j@ep-muddy-lake-a10qowlz.ap-southeast-1.aws.neon.tech/ai-generator?sslmode=require',
    }
  };
  