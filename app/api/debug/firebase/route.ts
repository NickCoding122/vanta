import { NextResponse } from "next/server";
import admin from "firebase-admin";
import { db } from "../../../../lib/firebaseAdmin";

export async function GET() {
  const app = admin.app();

  const info = {
    projectId: app.options.projectId,
    database: "(default)",
  };

  return NextResponse.json(info);
}
