import { useState } from "react";
import { Upload, Link as LinkIcon, Send } from "lucide-react";
import GlassCard from "../components/GlassCard";
import { inputTypes, sampleSubmission, sources } from "../data/prototypeData";

const emptyForm = {
  title: sampleSubmission.title,
  inputType: sampleSubmission.inputType,
  source: sampleSubmission.source,
  sector: sampleSubmission.sector,
  geography: sampleSubmission.geography,
  description: sampleSubmission.description,
  content: sampleSubmission.content
};

export default function IntakePage({ onSubmit }) {
  const [form, setForm] = useState(emptyForm);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  function updateField(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      await onSubmit(form);
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Unable to submit to OS");
      setSubmitting(false);
    }
  }

  return (
    <div className="page-stack">
      <GlassCard title="Autonomous Intake" subtitle="Submit once. The OS classifies, analyzes, generates, and queues approvals automatically.">
        <form className="intake-form" onSubmit={handleSubmit}>
          <div className="field-grid">
            <label>
              Title
              <input value={form.title} onChange={(event) => updateField("title", event.target.value)} placeholder="Enter a title" />
            </label>
            <label>
              Input type
              <select value={form.inputType} onChange={(event) => updateField("inputType", event.target.value)}>
                {inputTypes.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </label>
            <label>
              Source
              <select value={form.source} onChange={(event) => updateField("source", event.target.value)}>
                {sources.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </label>
            <label>
              Sector (optional)
              <input value={form.sector} onChange={(event) => updateField("sector", event.target.value)} placeholder="Renewable Energy" />
            </label>
            <label>
              Geography (optional)
              <input value={form.geography} onChange={(event) => updateField("geography", event.target.value)} placeholder="Uganda / East Africa" />
            </label>
          </div>

          <label>
            Description
            <textarea value={form.description} onChange={(event) => updateField("description", event.target.value)} rows={4} placeholder="Describe the opportunity, tender, mandate, or policy signal." />
          </label>

          <label>
            Pasted text
            <textarea value={form.content} onChange={(event) => updateField("content", event.target.value)} rows={8} placeholder="Paste the source text here." />
          </label>

          <div className="placeholder-row">
            <div className="placeholder-card">
              <Upload size={18} />
              <strong>Upload placeholder</strong>
              <span>Attach a document when file upload is enabled.</span>
            </div>
            <div className="placeholder-card">
              <LinkIcon size={18} />
              <strong>URL placeholder</strong>
              <span>Paste a source URL when external fetch is enabled.</span>
            </div>
          </div>

          {error ? <p className="error-banner">{error}</p> : null}

          <button type="submit" className="primary-button" disabled={submitting}>
            <Send size={16} /> {submitting ? "Submitting..." : "Submit to OS"}
          </button>
        </form>
      </GlassCard>
    </div>
  );
}
