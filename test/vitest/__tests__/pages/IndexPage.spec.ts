import { Quasar } from 'quasar';
import {
  describe, it, expect, vi, afterEach, beforeEach,
} from 'vitest';
import {
  render, configure, screen, within,
} from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import IndexPage from 'pages/IndexPage.vue';

describe('pages/IndexPage.vue -- authenticated users', async () => {
  beforeEach(async () => {
    configure({
      throwSuggestions: true,
    });
  });
  afterEach(() => {
    vi.restoreAllMocks();
    vi.clearAllMocks();
    vi.resetAllMocks();
  });

  it('renders Profiles dropdown button', async () => {
    const user = userEvent.setup();
    render(IndexPage, {
      global: {
        plugins: [
          Quasar,
        ],
      },
    });
    screen.debug();
    const profilesButton = screen.getByRole('button', { name: /Profiles/i });
    expect(profilesButton).toBeInTheDocument();
    await user.click(profilesButton);
    const profilesButtonMenu = screen.getByRole('menu');
    expect(within(profilesButtonMenu).getAllByRole('listitem')).toHaveLength(3);
    expect(within(profilesButtonMenu).getByText(/Your App Profile/i)).toBeInTheDocument();
    expect(within(profilesButtonMenu).getByText(/Your Auth Profile/i)).toBeInTheDocument();
    expect(within(profilesButtonMenu).getByText(/All App Profiles/i)).toBeInTheDocument();
  });
});
