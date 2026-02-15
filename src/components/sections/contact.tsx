"use client";

import * as React from "react";
import { SectionHeader } from "@/components/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { contact } from "@/data/contact";
import { Copy, Github, Linkedin, Mail } from "lucide-react";

async function copyText(text: string) {
  await navigator.clipboard.writeText(text);
}

export function ContactSection() {
  const [copied, setCopied] = React.useState(false);

  async function onCopy() {
    try {
      await copyText(contact.email);
      setCopied(true);
      toast.success("Email copied to clipboard");
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      toast.error("Failed to copy. You can manually select the email.");
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 py-14 md:py-20">
      <SectionHeader
        title="Contact"
        description="Want to discuss an opportunity or a project? The fastest way is email."
      />

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="border-white/10 bg-white/[0.03]">
          <CardContent className="p-6">
            <p className="text-sm text-white/60">Email</p>

            <div className="mt-2 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                <Mail className="h-4 w-4 text-white/70" />
                <span className="text-sm text-white/85">{contact.email}</span>
              </div>

              <Button
                onClick={onCopy}
                variant="outline"
                className="border-white/15 bg-transparent text-white/80 hover:bg-white/5"
              >
                <Copy className="mr-2 h-4 w-4" />
                {copied ? "Copied" : "Copy email"}
              </Button>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-white/65">
              I’m open to junior backend/full-stack roles and projects. If you
              include a short context and timeline, I’ll respond faster.
            </p>
          </CardContent>
        </Card>

        <Card className="border-white/10 bg-white/[0.03]">
          <CardContent className="p-6">
            <p className="text-sm text-white/60">Links</p>

            <div className="mt-3 flex flex-wrap gap-3">
              <Button
                asChild
                variant="outline"
                className="border-white/15 bg-transparent text-white/80 hover:bg-white/5"
              >
                <a href={contact.github} target="_blank" rel="noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-white/15 bg-transparent text-white/80 hover:bg-white/5"
              >
                <a href={contact.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-white/65">
              GitHub shows my code quality and patterns. LinkedIn contains my
              experience and background.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
