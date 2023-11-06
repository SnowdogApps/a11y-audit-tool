export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      audits: {
        Row: {
          config: Json
          created_at: string
          id: number
          is_triggered: boolean
          issues: Json | null
          profile_id: string
          project_id: number
          report_type: string | null
          status: string | null
          updated_at: string | null
        }
        Insert: {
          config?: Json
          created_at?: string
          id?: number
          is_triggered?: boolean
          issues?: Json | null
          profile_id: string
          project_id?: number
          report_type?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          config?: Json
          created_at?: string
          id?: number
          is_triggered?: boolean
          issues?: Json | null
          profile_id?: string
          project_id?: number
          report_type?: string | null
          status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'audits_profile_id_fkey'
            columns: ['profile_id']
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'audits_project_id_fkey'
            columns: ['project_id']
            referencedRelation: 'projects'
            referencedColumns: ['id']
          }
        ]
      }
      axe: {
        Row: {
          audit_id: number
          created_at: string
          errors: Json[] | null
          form_data: Json | null
          id: number
          results: Json | null
          selector: string | null
          size: string | null
        }
        Insert: {
          audit_id?: number
          created_at?: string
          errors?: Json[] | null
          form_data?: Json | null
          id?: number
          results?: Json | null
          selector?: string | null
          size?: string | null
        }
        Update: {
          audit_id?: number
          created_at?: string
          errors?: Json[] | null
          form_data?: Json | null
          id?: number
          results?: Json | null
          selector?: string | null
          size?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'axe_audit_id_fkey'
            columns: ['audit_id']
            referencedRelation: 'audits'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'axe_audit_id_fkey'
            columns: ['audit_id']
            referencedRelation: 'extended_audits'
            referencedColumns: ['id']
          }
        ]
      }
      profile_project: {
        Row: {
          profile_id: string
          project_id: number
        }
        Insert: {
          profile_id: string
          project_id: number
        }
        Update: {
          profile_id?: string
          project_id?: number
        }
        Relationships: [
          {
            foreignKeyName: 'profile_project_profile_id_fkey'
            columns: ['profile_id']
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'profile_project_project_id_fkey'
            columns: ['project_id']
            referencedRelation: 'projects'
            referencedColumns: ['id']
          }
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          user_type: Json | null
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          user_type?: Json | null
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          user_type?: Json | null
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'profiles_id_fkey'
            columns: ['id']
            referencedRelation: 'users'
            referencedColumns: ['id']
          }
        ]
      }
      projects: {
        Row: {
          created_at: string
          description: string | null
          id: number
          name: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: number
          name: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: number
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      extended_audits: {
        Row: {
          created_at: string | null
          id: number | null
          issues: Json | null
          profile_id: string | null
          project: string | null
          project_id: number | null
          status: string | null
          updated_at: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'audits_profile_id_fkey'
            columns: ['profile_id']
            referencedRelation: 'profiles'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'audits_project_id_fkey'
            columns: ['project_id']
            referencedRelation: 'projects'
            referencedColumns: ['id']
          }
        ]
      }
    }
    Functions: {
      delete_claim: {
        Args: {
          uid: string
          claim: string
        }
        Returns: string
      }
      get_claim: {
        Args: {
          uid: string
          claim: string
        }
        Returns: Json
      }
      get_claims: {
        Args: {
          uid: string
        }
        Returns: Json
      }
      get_my_claim: {
        Args: {
          claim: string
        }
        Returns: Json
      }
      get_my_claims: {
        Args: Record<PropertyKey, never>
        Returns: Json
      }
      is_claims_admin: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      set_claim: {
        Args: {
          uid: string
          claim: string
          value: Json
        }
        Returns: string
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
