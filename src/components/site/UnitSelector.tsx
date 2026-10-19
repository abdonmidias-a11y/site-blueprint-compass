import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import { MapPin, MessageCircle, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { UNITS, unitAddress, whatsappUrl } from "@/lib/site-data";

type Ctx = { open: (service?: string) => void };
const UnitSelectorContext = createContext<Ctx | null>(null);

export function useUnitSelector() {
  const ctx = useContext(UnitSelectorContext);
  if (!ctx) throw new Error("useUnitSelector must be used inside UnitSelectorProvider");
  return ctx;
}

export function UnitSelectorProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const [service, setService] = useState<string | undefined>();
  const open = useCallback((s?: string) => {
    setService(s);
    setOpen(true);
  }, []);

  return (
    <UnitSelectorContext.Provider value={{ open }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setOpen}>
        <DialogContent className="block max-w-md rounded-3xl p-0 overflow-hidden">
          <div className="h-2 stripes" />
          <div className="min-w-0 p-6 pt-4">
            <DialogHeader className="text-left">
              <DialogTitle className="font-display text-2xl">Em qual unidade deseja ser atendido?</DialogTitle>
              <DialogDescription>
                {service ? `Assunto: ${service}. ` : ""}Você será direcionado ao WhatsApp da unidade escolhida.
              </DialogDescription>
            </DialogHeader>
            <ul className="mt-5 grid min-w-0 gap-3">
              {UNITS.map((u) => (
                <li key={u.id}>
                  <a
                    href={whatsappUrl(u, service)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="group flex w-full min-w-0 items-center gap-4 rounded-2xl border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-card"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent text-primary">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-display text-lg font-bold">{u.name}</span>
                      <span className="block truncate text-xs text-muted-foreground">{unitAddress(u)}</span>
                    </span>
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground">
                      <MessageCircle className="h-4 w-4" />
                    </span>
                    <ChevronRight className="hidden h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 sm:block" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    </UnitSelectorContext.Provider>
  );
}
