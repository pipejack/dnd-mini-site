"use client"
import React, { useState } from 'react'

type ImageItem = { url: string }

export default function FlowClient() {
  const [loading, setLoading] = useState(false)
  const [images, setImages] = useState<ImageItem[]>([])
  const [selected, setSelected] = useState<string | null>(null)
  const [job, setJob] = useState<any>(null)
  const [order, setOrder] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  async function handleGenerate() {
    setError(null)
    setLoading(true)
    try {
      const res = await fetch('/api/generate', { method: 'POST' })
      const j = await res.json()
      if (!j.ok) throw new Error(j.error || 'generation failed')
      setImages((j.images || []).map((u: string) => ({ url: u })))
    } catch (err: any) {
      setError(err?.message || String(err))
    } finally {
      setLoading(false)
    }
  }

  async function handleConvert() {
    if (!selected) return setError('Select an image first')
    setError(null)
    setLoading(true)
    try {
      const res = await fetch('/api/convert', { method: 'POST', body: JSON.stringify({ image: selected }) })
      const j = await res.json()
      if (!j.ok) throw new Error(j.error || 'convert failed')
      setJob(j.job)
    } catch (err: any) {
      setError(err?.message || String(err))
    } finally {
      setLoading(false)
    }
  }

  async function handleCreateOrder() {
    setError(null)
    setLoading(true)
    try {
      const res = await fetch('/api/order', { method: 'POST', body: JSON.stringify({ amount: 4999, image: selected, jobId: job?.id }) })
      const j = await res.json()
      if (!j.ok) throw new Error(j.error || 'order failed')
      setOrder(j.order)
    } catch (err: any) {
      setError(err?.message || String(err))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flow-panel">
      <div className="flow-actions">
        <button onClick={handleGenerate} disabled={loading} className="btn">{loading ? 'Working…' : 'Generate Concepts'}</button>
        <button onClick={handleConvert} disabled={loading || !selected} className="btn muted">Convert to 3D</button>
        <button onClick={handleCreateOrder} disabled={loading || !job} className="btn primary">Create Order</button>
      </div>

      {error && <div className="flow-error">{error}</div>}

      <div className="thumb-grid">
        {images.map((it) => (
          <div key={it.url} className={`thumb ${selected === it.url ? 'selected' : ''}`} onClick={() => setSelected(it.url)}>
            <img src={it.url} alt="concept" />
          </div>
        ))}
      </div>

      {job && (
        <div className="turntable">
          <h4>Turntable Preview</h4>
          <img src={job.turntable} alt="turntable preview" />
        </div>
      )}

      {order && (
        <div className="order-box">
          <strong>Order created:</strong> {order.id} — status {order.status}
        </div>
      )}
    </div>
  )
}
