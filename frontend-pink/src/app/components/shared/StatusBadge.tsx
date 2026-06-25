import type { BatchStatus, ScreeningStatus, InquiryStatus, SMSStatus, TestResult } from '../../types'

type BadgeVariant =
  | BatchStatus
  | ScreeningStatus
  | InquiryStatus
  | SMSStatus
  | TestResult
  | 'NICU'
  | 'Non-NICU'
  | 'FC'
  | 'PU'
  | 'PRE'
  | 'POST'

const MAP: Record<string, { bg: string; text: string; ring: string }> = {
  // Batch lifecycle — light → dark along the palette
  RAW:             { bg: '#FFF3EC', text: '#C4815A', ring: '#FBC4AB' },
  PRE_TESTING:     { bg: '#FFF0EC', text: '#C46858', ring: '#F8AD9D' },
  PRE_TEST_PASSED: { bg: '#FFF0F2', text: '#C07090', ring: '#FFCAD4' },
  PASTEURIZED:     { bg: '#FFF5F7', text: '#B06070', ring: '#FADDE1' },
  POST_TESTING:    { bg: '#FFF0F5', text: '#C05080', ring: '#FFA6C1' },
  READY:           { bg: '#FFF0F5', text: '#C04878', ring: '#FFACC5' },
  DISPENSED:       { bg: '#FFF0F3', text: '#B45070', ring: '#F4ACB7' },
  PRE_TEST_FAILED: { bg: '#FFEEEE', text: '#C04040', ring: '#F08080' },
  POST_TEST_FAILED:{ bg: '#FFEEEE', text: '#C04040', ring: '#F08080' },
  DISCARDED:       { bg: '#FFEEEE', text: '#C04040', ring: '#F08080' },
  // Screening
  Passed:          { bg: '#FFECF2', text: '#B83870', ring: '#FF87AB' },
  Failed:          { bg: '#FFEEEE', text: '#C04040', ring: '#F08080' },
  Pending:         { bg: '#FFF0EC', text: '#C46858', ring: '#F4978E' },
  // Inquiry
  WAITING:         { bg: '#FFEEEC', text: '#B84848', ring: '#F4978E' },
  NOTIFIED:        { bg: '#FFF0F5', text: '#C04878', ring: '#FF97B7' },
  FULFILLED:       { bg: '#FFECF2', text: '#B83870', ring: '#FF87AB' },
  CANCELLED:       { bg: '#FFF8F0', text: '#B07040', ring: '#FFDAB9' },
  // SMS / Lab
  Sent:            { bg: '#FFF0F5', text: '#C04878', ring: '#FF97B7' },
  PASS:            { bg: '#FFECF2', text: '#B83870', ring: '#FF87AB' },
  FAIL:            { bg: '#FFEEEE', text: '#C04040', ring: '#F08080' },
  // Mode / Role badges
  NICU:            { bg: '#FFF0F5', text: '#C05878', ring: '#FFC4D6' },
  'Non-NICU':      { bg: '#FFF8F0', text: '#B07040', ring: '#FFDAB9' },
  FC:              { bg: '#FFECF3', text: '#CC2060', ring: '#FF5D8F' },
  PU:              { bg: '#FFF3EC', text: '#C4815A', ring: '#FBC4AB' },
  PRE:             { bg: '#FFF0EC', text: '#C46858', ring: '#F8AD9D' },
  POST:            { bg: '#FFECF3', text: '#CC2060', ring: '#FF5D8F' },
}

const LABEL_MAP: Record<string, string> = {
  PRE_TESTING: 'Pre-Testing',
  POST_TESTING: 'Post-Testing',
  PRE_TEST_PASSED: 'Pre-Test Passed',
  PRE_TEST_FAILED: 'Pre-Test Failed',
  POST_TEST_FAILED: 'Post-Test Failed',
  FC: 'Field Collection',
  PU: 'Pickup',
  PRE: 'Pre-Pasteurization',
  POST: 'Post-Pasteurization',
}

interface StatusBadgeProps {
  value: BadgeVariant | string
  short?: boolean
}

export function StatusBadge({ value, short = false }: StatusBadgeProps) {
  const s = MAP[value] ?? { bg: '#F3F2F1', text: '#636260', ring: '#DDDCDB' }
  const label = short ? value : (LABEL_MAP[value] ?? value)

  return (
    <span
      className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px]"
      style={{
        background: s.bg,
        color: s.text,
        boxShadow: `inset 0 0 0 1px ${s.ring}`,
        fontFamily: 'var(--font-family-mono)',
        fontWeight: 500,
        letterSpacing: '0.02em',
      }}
    >
      {label}
    </span>
  )
}
