import { AlertTriangle, X } from "lucide-react";
import Button from "@/components/ui/Button";

export default function ConfirmDialog({
  open,
  title = "Are you sure?",
  description = "This action cannot be undone.",
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
  confirmVariant = "primary",
  cancelVariant = "danger",
  icon: Icon = AlertTriangle,
  confirmButtonClassName = "",
  cancelButtonClassName = "",
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/55 px-4 py-6 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_30px_80px_rgba(15,23,42,0.25)]">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">{title}</h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onCancel}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
            aria-label="Close dialog"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <p className="mb-6 text-sm leading-6 text-slate-600">{description}</p>

        <div className="flex justify-end gap-2">
          <Button
            type="button"
            variant={cancelVariant}
            size="md"
            onClick={onCancel}
            className={`min-w-[120px] ${cancelButtonClassName}`}
          >
            {cancelText}
          </Button>

          <Button
            type="button"
            variant={confirmVariant}
            size="md"
            onClick={onConfirm}
            className={`min-w-[120px] ${confirmButtonClassName}`}
          >
            {confirmText}
          </Button>
        </div>
      </div>
    </div>
  );
}
