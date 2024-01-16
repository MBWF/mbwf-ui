"use client";

import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CarouselContainer } from "@/components/ui/carousel";
import { Checkbox } from "@/components/ui/checkbox";
import { DatePicker } from "@/components/ui/date-picker";
import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ModalLayout } from "@/components/ui/modal";
import { RadioGroup, RadioItem } from "@/components/ui/radio-group";
import { SelectContainer } from "@/components/ui/select";
import { H1, H2, H3, H4, Text } from "@/components/ui/typography";
import { useState } from "react";

export default function Home() {
  const [date, setDate] = useState<Date>();
  return (
    <main className="flex flex-col items-center justify-between">
      <div className="w-full">
        <Header />
      </div>
      <CarouselContainer
        aspectRatio={12 / 4}
        images={[
          {
            src: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80",
            alt: "Default Image",
          },
          {
            src: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80",
            alt: "Default Image",
          },
        ]}
      />
      <div className="flex flex-col gap-4 my-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <H1 className="text-center">MBWF___UI</H1>
        <H2 className="text-center">MBWF___UI</H2>
        <H3 className="text-center">MBWF___UI</H3>
        <H4 className="text-center">MBWF___UI</H4>
        <Text className="text-center">MBWF___UI</Text>

        <Input
          label="Email"
          type="email"
          onChange={(e) => console.log(e.target.value)}
        />
        <SelectContainer
          onChangeCallback={(value) => console.log(value)}
          placeholder="Nomes"
          options={[
            {
              label: "Nome 1",
              value: "1",
            },
            {
              label: "Nome 2",
              value: "2",
            },
          ]}
        />
        <DatePicker date={date} setDate={setDate} />
        <Checkbox
          label="Concordo com os temos de condições."
          description="Assine essa porra que serve pra nada."
        />
        <RadioGroup
          defaultValue="comfortable"
          onValueChange={(e) => console.log(e)}
        >
          <RadioItem label="Comfortable" value="comfortable" />
          <RadioItem label="Hard" value="Hard" />
          <RadioItem label="compact" value="Compact" />
        </RadioGroup>

        <ModalLayout modalTrigger={<Button>Abrir Modal</Button>}>
          <DialogHeader>
            <DialogTitle>Share link</DialogTitle>
            <DialogDescription>
              Anyone who has this link will be able to view this.
            </DialogDescription>
          </DialogHeader>
        </ModalLayout>
      </div>
    </main>
  );
}
