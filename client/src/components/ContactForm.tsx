import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";

export function ContactForm() {
  return (
    <div className="flex max-w-xl flex-col gap-6 p-10">
      <Card className="border-none bg-inherit">
        <CardHeader>
          <CardTitle>Επικοινωνήστε μαζί μας</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="email">
                  Email
                  <span className="text-red-400">*</span>
                </FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="fullname">
                  Ονοματεπώνυμο
                  <span className="text-red-400">*</span>
                </FieldLabel>
                <Input id="fullname" type="text" required />
              </Field>

              <Field>
                <FieldLabel htmlFor="telephone">
                  Τηλέφωνο
                  <span className="text-red-400">*</span>
                </FieldLabel>
                <Input id="telephone" type="tel" required />
              </Field>

              <Field>
                <FieldLabel htmlFor="message">
                  Το Μήνυμά Σας
                  <span className="text-red-400">*</span>
                </FieldLabel>
                <Textarea id="message" />
              </Field>
              <Field>
                <Button type="submit">Αποστολή Μηνύματος</Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
