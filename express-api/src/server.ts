import express, { type Request, type Response } from "express";
import { z } from "zod";

const app = express();
app.use(express.json());

type Item = {
  id: number;
  name: string;
  description?: string;
};

const createItemSchema = z.object({
  name: z.string().trim().min(1, "name is required").max(100),
  description: z.string().trim().max(500).optional(),
});

const updateItemSchema = createItemSchema;

const items: Item[] = [];
let nextId = 1;

function parseId(rawId: string): number | null {
  const id = Number(rawId);
  if (!Number.isInteger(id) || id <= 0) return null;
  return id;
}

app.get("/items", (_req: Request, res: Response) => {
  return res.status(200).json({ success: true, data: items });
});

app.post("/items", (req: Request, res: Response) => {
  const parsed = createItemSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      success: false,
      error: {
        code: "VALIDATION_ERROR",
        message: "Invalid input",
        fieldErrors: parsed.error.flatten().fieldErrors,
      },
    });
  }

  const newItem: Item = {
    id: nextId++,
    name: parsed.data.name,
    description: parsed.data.description,
  };

  items.push(newItem);

  return res.status(201).json({ success: true, data: newItem });
});

app.put("/items/:id", (req: Request, res: Response) => {
  const id = parseId(req.params.id);

  if (id === null) {
    return res.status(400).json({
      success: false,
      error: {
        code: "INVALID_ID",
        message: "id must be a positive integer",
      },
    });
  }

  const parsed = updateItemSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      success: false,
      error: {
        code: "VALIDATION_ERROR",
        message: "Invalid input",
        fieldErrors: parsed.error.flatten().fieldErrors,
      },
    });
  }

  const itemIndex = items.findIndex((item) => item.id === id);

  if (itemIndex === -1) {
    return res.status(404).json({
      success: false,
      error: {
        code: "NOT_FOUND",
        message: "Item not found",
      },
    });
  }

  const updatedItem: Item = {
    id,
    name: parsed.data.name,
    description: parsed.data.description,
  };

  items[itemIndex] = updatedItem;

  return res.status(200).json({ success: true, data: updatedItem });
});

app.delete("/items/:id", (req: Request, res: Response) => {
  const id = parseId(req.params.id);

  if (id === null) {
    return res.status(400).json({
      success: false,
      error: {
        code: "INVALID_ID",
        message: "id must be a positive integer",
      },
    });
  }

  const itemIndex = items.findIndex((item) => item.id === id);

  if (itemIndex === -1) {
    return res.status(404).json({
      success: false,
      error: {
        code: "NOT_FOUND",
        message: "Item not found",
      },
    });
  }

  const [deletedItem] = items.splice(itemIndex, 1);

  return res.status(200).json({ success: true, data: deletedItem });
});

app.use((_req: Request, res: Response) => {
  return res.status(404).json({
    success: false,
    error: {
      code: "NOT_FOUND",
      message: "Route not found",
    },
  });
});

const PORT = Number(process.env.PORT ?? 4000);

app.listen(PORT, () => {
  console.log(`Express API listening on http://localhost:${PORT}`);
});
