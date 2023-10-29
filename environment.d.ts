namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL: string;
    DATABASE_NAME: string;
    GOOGLE_API_KEY: string;
    MONGODB_URI: string;
    NEXTAUTH_SECRET: string;
    NEXTAUTH_URL: string;
    // add more environment variables and their types here
  }
}
